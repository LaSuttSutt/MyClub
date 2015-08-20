/*
 Capsules all methods fot the authenticationApi
 */
define(function() {

    return {

        checkAuthenticationPromise: function(tokenId, userId) {

            return new Promise(function(resolve, reject) {

                $.ajax({
                    type: 'POST',
                    url: '/myclub/api/authentication/check',
                    success: resolve,
                    error: reject,
                    data: {
                        tokenId: tokenId,
                        userId: userId
                    }
                });
            });
        },

        checkAuthentication: function(tokenId, userId, onSuccess, onError) {

            $.ajax({
                type: 'POST',
                url: '/myclub/api/authentication/check',
                success: onSuccess,
                error: onError,
                data: {
                    tokenId: tokenId,
                    userId: userId
                }
            });
        },
        logIn: function(userName, password, success) {

            $.ajax({

                type: 'POST',
                url: '/myclub/api/authentication/logIn',
                success: success,
                data: {
                    userName: userName,
                    password: password
                }
            });
        }
    };
});