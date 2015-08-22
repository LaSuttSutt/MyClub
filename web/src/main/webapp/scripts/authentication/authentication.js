/*
 Capsules all logic for authentication
 */
define(function (require) {

    var localStorageHelper = require('common/localStorageHelper');
    var api = require('authentication/authenticationApi');
    var data = require('startUp/startUpViewData');

    var self = {

        // Authentication
        checkAuthentication: function() {

            return new Promise(function(resolve, reject) {

                var tokenUserData = self.getTokenAndUser();
                if (tokenUserData == null) {
                    data.authentication.focus(true);
                    data.authentication.loggedIn(false);
                    reject();
                }

                api.checkAuthentication(tokenUserData.tokenId, tokenUserData.userId).then(function(user) {

                    self.storeUserData(user);
                    data.authentication.loggedIn(true);
                    resolve();

                }, function(error) {

                    if (error.status == 401) {

                        data.authentication.focus(true);
                        data.authentication.loggedIn(false);
                        localStorageHelper.deleteTokenId();
                        localStorageHelper.deleteUserId();
                        localStorageHelper.deleteUserName();
                        localStorageHelper.deleteUserRoles();
                    }
                    reject();
                });
            });
        },

        // LogIn/LogOut
        logIn: function() {

            return new Promise(function(resolve, reject) {

                data.authentication.userNameValidation('');
                data.authentication.passwordValidation('');

                api.logIn(data.authentication.userName(), data.authentication.password()).then(
                    function(logInResult) {

                        /** @namespace logInResult.errors */
                        if (!logInResult.success) {
                            self.showValidationErros(logInResult.errors);
                            reject();
                        }
                        else {
                            /** @namespace logInResult.token */
                            data.authentication.loggedIn(true);
                            localStorageHelper.setTokenId(logInResult.token.id);
                            self.storeUserData(logInResult.user);
                            resolve();
                        }
                    }
                );
            });
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
        },
        logOut: function() {

            var tokenUserData = self.getTokenAndUser();
            api.logOut(tokenUserData.userId, tokenUserData.tokenId).then(
                function() {
                    self.deleteStoredUserData();
                    window.location = "/myclub/index.html";
                }
            );
        },

        // Helper
        getTokenAndUser: function() {

            var tokenId = localStorageHelper.getTokenId();
            var userId = localStorageHelper.getUserId();

            if (tokenId == null || userId == null) {
                return null;
            }

            return {
                tokenId: tokenId,
                userId: userId
            };
        },
        storeUserData: function(user) {

            data.user.id(user.id);
            data.user.name(user.name);
            data.user.roles(user.roles);

            localStorageHelper.setUserId(user.id);
            localStorageHelper.setUserName(user.name);
            localStorageHelper.setUserRoles(user.roles);
        },
        deleteStoredUserData: function() {

            localStorageHelper.deleteTokenId();
            localStorageHelper.deleteUserId();
            localStorageHelper.deleteUserName();
            localStorageHelper.deleteUserRoles();
        }
    };

    return self;
});