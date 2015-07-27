package de.itpuzzles.myclub.domainmodel.validation;

public class ValidationError {

    //region #Declarations

    private String field;
    private String errorMessage;

    //endregion

    //region #Constructors

    public ValidationError(String field, String message) {
        this.setField(field);
        this.setErrorMessage(message);
    }

    //endregion

    //region #Getter/Setter

    public void setField(String field) { this.field = field; }
    public String getField() { return this.field; }

    public void setErrorMessage(String message) { this.errorMessage = message; }
    public String getErrorMessage() { return this.errorMessage; }

    //endregion
}
