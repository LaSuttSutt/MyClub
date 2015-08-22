package de.itpuzzles.myclub.api.access.user;

import de.itpuzzles.myclub.api.authentication.HasRole;
import de.itpuzzles.myclub.api.logic.user.UserLogic;
import de.itpuzzles.myclub.domainmodel.users.User;
import de.itpuzzles.myclub.domainmodel.validation.ValidationError;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.UUID;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserApi {

    //region #Declarations

    @Inject
    private UserLogic logic;

    //endregion

    //region #API-Methods

    @GET
    @Path("/")
    @HasRole(User.UserRole.ADMIN)
    public List<User> getAllUsers() {

        return logic.getAllUsers();
    }

    @GET
    @Path("/roles")
    @HasRole(User.UserRole.ADMIN)
    public List<String> getUserRoles() {

        return logic.getUserRoles();
    }

    @GET
    @Path("/new")
    @HasRole(User.UserRole.ADMIN)
    public User createNewUser() {

        return logic.createNewUser();
    }

    @POST
    @Path("/validate")
    @HasRole(User.UserRole.ADMIN)
    public List<ValidationError> validateUser(User user) {

        return logic.validateUser(user);
    }

    @POST
    @Path("/")
    @HasRole(User.UserRole.ADMIN)
    public void storeUser(User user) {

        logic.storeUser(user);
    }

    @POST
    @Path("/update")
    @HasRole(User.UserRole.ADMIN)
    public void updateUser(User user) {

        logic.updateUser(user);
    }

    @DELETE
    @Path("/{id}")
    @HasRole(User.UserRole.ADMIN)
    public void deleteUser(@PathParam("id") UUID id) {

        logic.deleteUser(id);
    }

    //endregion
}
