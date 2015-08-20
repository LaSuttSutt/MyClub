/*
 Capsules all methods fot the authenticationApi
 */
define(function() {

    return {

        checkAuthentication: function(tokenId, userId) {

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
        logIn: function(userName, password) {

            return new Promise(function(resolve) {
                $.ajax({

                    type: 'POST',
                    url: '/myclub/api/authentication/logIn',
                    success: resolve,
                    data: {
                        userName: userName,
                        password: password
                    }
                });
            });
        }
    };
});