/*
 Capsules all methods fot the authenticationApi
 */
define(function() {

    return {

        logIn: function(userName, password, success) {

            $.ajax({

                type: 'POST',
                url: 'api/authentication/logIn',
                success: success,
                data: {
                    userName: userName,
                    password: password
                }
            });
        }
    };
});