/*
 Capsules all logic for authentication
 */
define(function (require) {

    var localStorageHelper = require('common/localStorageHelper');
    var api = require('authentication/authenticationApi');
    var data = require('startUp/startUpViewData');

    var self = {

        checkAuthentication: function(afterCheck) {

            // token exists
            var tokenId = localStorageHelper.getTokenId();
            var userId = localStorageHelper.getUserId();
            if (tokenId == null || userId == null) {
                data.authentication.focus(true);
                if (window.location.pathname != "/myclub/index.html") {
                    window.location = "/myclub/index.html";
                }
                afterCheck(false);
                return;
            }

            // success
            var success = function(user) {

                // Set user
                localStorageHelper.setUserId(user.id);
                localStorageHelper.setUserName(user.name);
                localStorageHelper.setUserRoles(user.roles);

                data.authentication.loggedIn(true);

                // Given success
                afterCheck(true);
            };

            // error
            var error = function(error) {
                if (error.status == 401) {

                    data.authentication.focus(true);
                    data.authentication.loggedIn(false);
                    localStorageHelper.deleteTokenId();
                    localStorageHelper.deleteUserId();
                    localStorageHelper.deleteUserName();
                    localStorageHelper.deleteUserRoles();

                    if (window.location.pathname != "/myclub/index.html") {
                        window.location = "/myclub/index.html";
                    }
                }
                afterCheck(false);
            };

            // check token
            api.checkAuthentication(tokenId, userId, success, error);
        },

        // LogIn
        logIn: function() {

            data.authentication.userNameValidation('');
            data.authentication.passwordValidation('');

            // success
            var success = function(logInResult) {

                /** @namespace logInResult.errors */
                if (!logInResult.success) {
                    self.showValidationErros(logInResult.errors);
                }
                else {
                    data.authentication.loggedIn(true);

                    /** @namespace logInResult.token */
                    /** @namespace logInResult.user */
                    /** @namespace logInResult.user.roles */
                    localStorageHelper.setTokenId(logInResult.token.id);
                    localStorageHelper.setUserId(logInResult.user.id);
                    localStorageHelper.setUserName(logInResult.user.name);
                    localStorageHelper.setUserRoles(logInResult.user.roles);

                    window.location.reload();
                }
            };

            api.logIn(data.authentication.userName(), data.authentication.password(), success);
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