package de.itpuzzles.myclub.api.authentication;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.api.logic.authentication.AuthenticationLogic;

import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.NotAuthorizedException;
import java.util.UUID;

@Interceptor
@HasRole({})
public class HasRoleInterceptor {

    //region #Declarations

    @Inject
    HttpServletRequest request;

    @Inject
    private IDataAccessManager dataAccessManager;

    @Inject
    private AuthenticationLogic authenticationLogic;

    //endregion

    //region #Public Methods

    @AroundInvoke
    public Object checkUserRole(InvocationContext context) throws Exception {

        String tokenUser = request.getHeader("MYCLUB_TOKEN_USER");
        String tokenId = request.getHeader("MYCLUB_TOKEN_ID");

        if (tokenUser == null || tokenId == null ||
                tokenUser.equals("null") || tokenId.equals("null") ||
                tokenUser.length() == 0 || tokenId.length() == 0)
            throw new NotAuthorizedException("Falsches client Token");

        authenticationLogic.checkAuthentication(UUID.fromString(tokenId), UUID.fromString(tokenUser));

        return context.proceed();
    }

    //endregion
}
