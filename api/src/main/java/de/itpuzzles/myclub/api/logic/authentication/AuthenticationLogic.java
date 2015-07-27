package de.itpuzzles.myclub.api.logic.authentication;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.api.logic.user.UserLogic;
import de.itpuzzles.myclub.domainmodel.authentication.LogInResult;
import de.itpuzzles.myclub.domainmodel.authentication.Token;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

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
        User user = this.loadUser(userName);
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

    //endregion

    //region #Private Methods

    private User loadUser(String name) {

        return userLogic.getUserByNameOrShortName(name);
    }

    private boolean checkPassword(User user, String password) {

        String md5Hash = userLogic.createMd5(password);
        return user.getPassword().equals(md5Hash);
    }

    private Token createAndStoreUserToken(User user) {

        Token token = new Token(user.getId());
        dataAccessManager.store(token);
        return token;
    }

    //endregion
}
