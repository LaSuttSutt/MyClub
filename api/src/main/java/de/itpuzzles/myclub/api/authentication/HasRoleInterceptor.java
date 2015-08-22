package de.itpuzzles.myclub.api.authentication;

import de.itpuzzles.myclub.api.dataaccess.IDataAccessManager;
import de.itpuzzles.myclub.api.logic.authentication.AuthenticationLogic;
import de.itpuzzles.myclub.api.logic.user.UserLogic;
import de.itpuzzles.myclub.domainmodel.users.User;

import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.ForbiddenException;
import javax.ws.rs.NotAuthorizedException;
import java.util.List;
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

    @Inject
    private UserLogic userLogic;

    //endregion

    //region #Public Methods

    @AroundInvoke
    public Object checkUserRole(InvocationContext context) throws Exception {

        String tokenUser = request.getHeader("userId");
        String tokenId = request.getHeader("tokenId");

        if (tokenUser == null || tokenId == null ||
                tokenUser.equals("null") || tokenId.equals("null") ||
                tokenUser.length() == 0 || tokenId.length() == 0)
            throw new NotAuthorizedException("Falsches client Token");

        authenticationLogic.checkAuthentication(UUID.fromString(tokenId), UUID.fromString(tokenUser));

        // check roles
        List<String> userRoles = userLogic.loadRolesForUser(UUID.fromString(tokenUser));
        User.UserRole[] roles = context.getMethod().getAnnotation(HasRole.class).value();
        for (User.UserRole role : roles) {
            if (userRoles.contains(role.getName()))
                return context.proceed();
        }

        throw new ForbiddenException("Zugriff nicht erlaubt");
    }

    //endregion
}
