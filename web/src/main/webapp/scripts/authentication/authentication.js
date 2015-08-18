/*
 Capsules all logic for authentication
 */
define(function (require) {

    var localStorageHelper = require('common/localStorageHelper');
    var api = require('authentication/authenticationApi');
    var data = require('startUp/startUpViewData');

    var self = {

        checkAuthentication: function() {

            // token exists
            var token = localStorageHelper.getToken();
            if (token == null) {
                data.authentication.focus(true);
                return;
            }

            // check token


            // token prooved
            data.authentication.loggedIn(true);
        },

        // LogIn
        logIn: function() {

            data.authentication.userNameValidation('');
            data.authentication.passwordValidation('');

            api.logIn(data.authentication.userName(), data.authentication.password(), self.logInSucceed);
        },
        logInSucceed: function(logInResult) {

            /** @namespace logInResult.errors */
            if (!logInResult.success) {
                self.showValidationErros(logInResult.errors);
            }
            else {
                data.authentication.loggedIn(true);

                /** @namespace logInResult.token */
                /** @namespace logInResult.user */
                /** @namespace logInResult.user.roles */
                localStorageHelper.setToken(logInResult.token);
                localStorageHelper.setUserName(logInResult.user.name);
                localStorageHelper.setUserRoles(logInResult.user.roles);
            }
        },
        showValidationErros: function(errors) {

            errors.forEach(function(error) {

                /** @namespace error.errorMessage */
                /** @namespace error.field */

                //noinspection JSValidateTypes
                if (error.field == 'name') {

                    data.authentication.userNameValidation(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == 'password') {

                    data.authentication.passwordValidation(error.errorMessage);
                }
            });
        }
    };

    return self;
});