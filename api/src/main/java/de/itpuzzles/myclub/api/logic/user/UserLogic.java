package de.itpuzzles.myclub.api.logic.user;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.users.UserRoles;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Stateless
public class UserLogic {

    //region #Declarations

    @Inject
    private IDataAccessManager dataAccessManager;

    //endregion

    //region #Public Methods

    public List<User> getAllUsers() {

        List<User> result = dataAccessManager.getAllEntities(User.class);
        List<UserRoles> allRoles = dataAccessManager.getAllEntities(UserRoles.class);

        for (User user : result) {

            user.setRoles(allRoles.stream().filter(r -> r.getFkUserId().equals(user.getId()))
                    .map(UserRoles::getRole).collect(Collectors.toList()));
        }

        Collections.sort(result, (o1, o2) -> o1.getName().compareTo(o2.getName()));

        return result;
    }

    //endregion

    //region #Private Methods

    //endregion
}
