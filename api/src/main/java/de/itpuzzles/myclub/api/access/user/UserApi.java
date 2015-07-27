package de.itpuzzles.myclub.api.access.user;

import de.itpuzzles.myclub.api.authentication.HasRole;
import de.itpuzzles.myclub.api.logic.user.UserLogic;
import de.itpuzzles.myclub.domainmodel.users.User;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserApi {

    //region #Declarations

    @Inject
    private UserLogic userLogic;

    //endregion

    //region #API-Methods

    @GET
    @Path("/")
    @HasRole(User.UserRole.ADMIN)
    public List<User> getAllUsers() {

        return userLogic.getAllUsers();
    }

    //endregion
}
