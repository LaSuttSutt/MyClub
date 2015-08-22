package de.itpuzzles.myclub.api.logic.user;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.List;
import java.util.UUID;

@Stateless
public class UserValidation {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    //endregion

    //region #Public Methods

    public void validateNameAndShortName(List<ValidationError> errors, String name, String shortName, UUID userId) {

        List<User> existingUsers = dataAccessManager.getAllEntities(User.class);

        // The name is required and unique
        if (name == null || name.length() == 0) {
            errors.add(new ValidationError("name", "Der Name ist ein Pflichtfeld"));
        } else {
            for (User existing : existingUsers) {

                if (existing.getId().equals(userId))
                    continue;

                if (existing.getName().toLowerCase().equals(name.toLowerCase())) {
                    errors.add(new ValidationError("name", "Dieser Name ist bereits vorhanden"));
                    break;
                }
            }
        }

        // The short name is required and unique
        if (shortName == null || shortName.length() == 0) {
            errors.add(new ValidationError("shortName", "Das Kürzel ist ein Pflichtfeld"));
        }
        else if (shortName.length() > 5) {
            errors.add(new ValidationError("shortName", "Das Kürzel darf maximal 5 Zeichen haben"));
        }
        else {
            for (User existing : existingUsers) {

                if (existing.getId().equals(userId))
                    continue;

                if (existing.getShortName().toLowerCase().equals(shortName.toLowerCase())) {
                    errors.add(new ValidationError("shortName", "Dieses Kürzel ist bereits vergeben"));
                    break;
                }
            }
        }
    }

    public void validatePassword(List<ValidationError> errors, String password) {

        // Password must have a minimum length of 5 characters
        if (password == null || password.length() < 5) {

            errors.add(new ValidationError("pwd", "Das Passwort muss mindestens 5 Zeichen haben"));
        }
    }

    public void validateRoles(List<ValidationError> errors, List<String> roles) {

        if (roles.size() == 0) {
            errors.add(new ValidationError("roles", "Es muss mindestens eine Rolle vergeben werden"));
        }
    }

    public void validateEmail(List<ValidationError> errors, String email) {

        if (email == null || email.length() == 0)
            return;

        try {

            InternetAddress emailAddress = new InternetAddress(email);
            emailAddress.validate();

        } catch (AddressException ex) {
            errors.add(new ValidationError("email", "Diese Mail-Adresse ist ungültig"));
        }
    }

    //endregion
}
