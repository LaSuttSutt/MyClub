package de.itpuzzles.myclub.api.logic.user;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.users.UserRoles;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.*;
import java.util.stream.Collectors;

@Stateless
public class UserLogic {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    //endregion

    //region #Public Methods

    // Returns all users
    public List<User> getAllUsers() {

        List<User> result = dataAccessManager.getAllEntities(User.class);

        for (User user : result) {

            user.setRoles(this.loadRolesForUser(user.getId()));
        }

        Collections.sort(result, (o1, o2) -> o1.getName().compareTo(o2.getName()));

        return result;
    }

    // Creates and returns a new user
    public User createNewUser() {

        User user = new User();

        user.setName("test");
        List<User.UserRole> roles = new ArrayList<>();
        roles.add(User.UserRole.ClubManagement);
        user.setRoles(roles);

        return user;
    }

    // Returns the user with the given name or shortName
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

    // Returns the user with the given id
    public User getUserById(UUID id) {

        User user = dataAccessManager.getEntityById(User.class, id);
        if (user == null)
            return null;

        user.setRoles(this.loadRolesForUser(id));
        return user;
    }

    // Creates a MD5-Hash from the given text
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

    // Returns all roles for the user with the given id
    public List<User.UserRole> loadRolesForUser(UUID userId) {

        List<UserRoles> allRoles = dataAccessManager.getAllEntities(UserRoles.class);
        return allRoles.stream().filter
                (r -> r.getFkUserId().equals(userId)).map
                (UserRoles::getRole).collect(Collectors.toList());
    }

    //endregion
}
