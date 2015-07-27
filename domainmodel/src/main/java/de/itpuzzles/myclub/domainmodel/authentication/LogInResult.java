package de.itpuzzles.myclub.domainmodel.authentication;

import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;

import java.util.List;

public class LogInResult {

    //region #Declarations

    private boolean success;
    private List<ValidationError> errors;
    private Token token;
    private User user;

    //endregion

    //region #Constructors

    public LogInResult(List<ValidationError> errors) {
        this.setSuccess(false);
        this.setErrors(errors);
    }

    public LogInResult(Token token, User user) {
        this.setSuccess(true);
        this.setToken(token);
        this.setUser(user);
    }

    //endregion

    //region #Getter/Setter

    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<ValidationError> getErrors() {
        return errors;
    }
    public void setErrors(List<ValidationError> errors) {
        this.errors = errors;
    }

    public Token getToken() {
        return token;
    }
    public void setToken(Token token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    //endregion
}
