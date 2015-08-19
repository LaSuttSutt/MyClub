package de.itpuzzles.myclub.api.logic.authentication;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.api.logic.user.UserLogic;
import de.itpuzzles.myclub.domainmodel.authentication.LogInResult;
import de.itpuzzles.myclub.domainmodel.authentication.Token;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;
import org.joda.time.DateTime;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.NotAuthorizedException;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Stateless
public class AuthenticationLogic {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    @Inject
    private UserLogic userLogic;

    //endregion

    //region #Public Methods

    public LogInResult logIn(String userName, String password) {

        List<ValidationError> errors = new ArrayList<>();

        // Validation userName is not empty
        if (userName == null || userName.length() == 0) {
            errors.add(new ValidationError("name", "Es wurde kein Name angegeben"));
            return new LogInResult(errors);
        }

        // Validation user exists
        User user = userLogic.getUserByNameOrShortName(userName);
        if (user == null) {
            errors.add(new ValidationError("name", "Der Benutzer ist nicht bekannt"));
            return new LogInResult(errors);
        }

        // Validation password is not empty
        if (password == null || password.length() == 0) {
            errors.add(new ValidationError("password", "Es wurde kein Passwort angegeben"));
            return new LogInResult(errors);
        }

        // Check password
        if (!this.checkPassword(user, password)) {
            errors.add(new ValidationError("password", "Das Passwort ist falsch"));
            return new LogInResult(errors);
        }

        return new LogInResult(this.createAndStoreUserToken(user), user);
    }

    public User checkAuthentication(UUID tokenId, UUID userId) {

        Token token = dataAccessManager.getEntityById(Token.class, tokenId);
        User user = userLogic.getUserById(userId);

        if (token == null || user == null)
            throw new NotAuthorizedException("Token oder Benutzer konnten nicht gefunden werden");

        if (!token.getFkUserId().equals(userId))
            throw new NotAuthorizedException("Token gehört nicht zum angegebenen Benutzer");

        long tokenTime = token.getCreated().getTime();
        long nowTime = new Date().getTime();
        long tokenAge = nowTime - tokenTime;
        long hourSpan = TimeUnit.HOURS.convert(tokenAge, TimeUnit.MILLISECONDS);

        if (hourSpan > 4)
            throw new NotAuthorizedException("Token gehört nicht zum angegebenen Benutzer");

        return user;
    }

    //endregion

    //region #Private Methods

    private boolean checkPassword(User user, String password) {

        String md5Hash = userLogic.createMd5(password);
        return user.getPassword().equals(md5Hash);
    }

    private Token createAndStoreUserToken(User user) {

        // Alte Tokens löschen
        this.deleteOldTokens(user.getId());

        Token token = new Token(user.getId());
        dataAccessManager.store(token);
        return token;
    }

    private void deleteOldTokens(UUID userId) {

        String query = "SELECT t FROM Token t WHERE t.fkUserId = :userId";
        Map<String, String> parameters = new HashMap<>();
        parameters.put("userId", userId.toString());

        List<Token> oldTokens = dataAccessManager.getEntities(Token.class, query, parameters);
        oldTokens.forEach(dataAccessManager::delete);
    }

    //endregion
}
