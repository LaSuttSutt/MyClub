package de.itpuzzles.myclub.api.access.authentication;

import de.itpuzzles.myclub.api.logic.authentication.AuthenticationLogic;
import de.itpuzzles.myclub.domainmodel.authentication.LogInResult;
import de.itpuzzles.myclub.domainmodel.users.User;

import javax.inject.Inject;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.UUID;

@Path("/authentication")
@Produces(MediaType.APPLICATION_JSON)
public class AuthenticationApi {

    //region #Declarations

    @Inject
    private AuthenticationLogic authenticationLogic;

    //endregion

    //region #API Methods

    @POST
    @Path("/check")
    public User checkAuthentication(@FormParam("tokenId") UUID tokenId, @FormParam("userId") UUID userId) {

        return null;
    }

    @POST
    @Path("/logIn")
    public LogInResult logIn(@FormParam("userName") String userName, @FormParam("password") String password) {

        return authenticationLogic.logIn(userName, password);
    }

    //endregion
}
