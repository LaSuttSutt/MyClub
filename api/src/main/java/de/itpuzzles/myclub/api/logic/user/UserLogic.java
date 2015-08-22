package de.itpuzzles.myclub.api.logic.user;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.users.UserRoles;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.NotFoundException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.*;
import java.util.stream.Collectors;

@Stateless
public class UserLogic {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    @Inject
    private UserValidation validation;

    //endregion

    //region #Public Methods

    // GET
    public List<User> getAllUsers() {

        List<User> result = dataAccessManager.getAllEntities(User.class);

        for (User user : result) {

            user.setRoles(this.loadRolesForUser(user.getId()));
        }

        Collections.sort(result, (o1, o2) -> o1.getName().compareTo(o2.getName()));

        return result;
    }

    public List<String> getUserRoles() {

        List<String> result = new ArrayList<>();

        for (User.UserRole role : User.UserRole.values()) {
            result.add(role.getName());
        }

        return result;
    }

    public User getUserByNameOrShortName(String name) {

        String query = "SELECT u FROM User u WHERE u.name = :name OR u.shortName = :name";
        Map<String, String> parameters = new HashMap<>();
        parameters.put("name", name);

        List<User> users = dataAccessManager.getEntities(User.class, query, parameters);

        if (users == null || users.size() == 0)
            return null;

        User result = users.get(0);
        result.setRoles(this.loadRolesForUser(result.getId()));

        return result;
    }

    public User getUserById(UUID id) {

        User user = dataAccessManager.getEntityById(User.class, id);
        if (user == null)
            return null;

        user.setRoles(this.loadRolesForUser(id));
        return user;
    }

    // Validation
    public List<ValidationError> validateUser(User user) {

        List<ValidationError> result = new ArrayList<>();

        validation.validateNameAndShortName(result, user.getName(), user.getShortName(), user.getId());
        validation.validatePassword(result, user.getPassword());
        validation.validateRoles(result, user.getRoles());
        validation.validateEmail(result, user.getEmail());

        return result;
    }

    // CRUD
    public User createNewUser() {

        User user = new User();

        user.setName("");
        user.setEmail("");
        user.setPassword("");
        user.setPassword("");

        List<String> roles = new ArrayList<>();
        roles.add(User.UserRole.ClubManagement.getName());
        user.setRoles(roles);

        return user;
    }

    public void storeUser(User user) {

        user.setPassword(this.createMd5(user.getPassword()));
        dataAccessManager.store(user);

        this.storeRolesForUser(user.getId(), user.getRoles());
    }

    public void updateUser(User user) {

        User existingUser = dataAccessManager.getEntityById(User.class, user.getId());
        if (existingUser == null)
            throw new NotFoundException("Benutzer konnte nicht gefunden werden");

        user.setPassword(existingUser.getPassword());
        dataAccessManager.update(user);

        this.deleteRolesForUser(user.getId());
        this.storeRolesForUser(user.getId(), user.getRoles());
    }

    public void deleteUser(UUID id) {

        User user = dataAccessManager.getEntityById(User.class, id);
        if (user == null || user.getShortName().equals("admin")) {
            return;
        }

        dataAccessManager.deleteEntityById(User.class, id);
        this.deleteRolesForUser(id);
    }

    // Helper
    public  String createMd5(String text) {

        if (text == null)
            return null;

        try {
            MessageDigest digest = MessageDigest.getInstance("MD5");
            digest.update(text.getBytes(), 0, text.length());
            return new BigInteger(1, digest.digest()).toString();
        }
        catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
    }

    public List<String> loadRolesForUser(UUID userId) {

        List<UserRoles> allRoles = dataAccessManager.getAllEntities(UserRoles.class);
        return allRoles.stream().filter
                (r -> r.getFkUserId().equals(userId)).map
                (role -> role.getRole().getName()).collect(Collectors.toList());
    }

    //endregion

    //region #Private Methods

    private void storeRolesForUser(UUID userId, List<String> roles) {

        for (User.UserRole role : User.UserRole.values()) {

            if (roles.contains(role.getName())) {

                UserRoles userRole = new UserRoles(userId, role);
                dataAccessManager.store(userRole);
            }
        }
    }

    private void deleteRolesForUser(UUID userId) {

        String query = "DELETE FROM UserRoles u WHERE u.fkUserId = :userId";
        Map<String, String> parameters = new HashMap<>();
        parameters.put("userId", userId.toString());

        dataAccessManager.deleteEntites(query, parameters);
    }

    //endregion
}
