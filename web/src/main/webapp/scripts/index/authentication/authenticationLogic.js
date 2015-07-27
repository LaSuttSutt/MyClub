/*
 Capsules all logic for authentication
 */
define(function (require) {

    var localStorageHelper = require('../../common/localStorageHelper');
    var authenticationApi = require('authentication/authenticationApi');

    var authenticationLogic = {

        checkAuthentication: function(indexPageViewModels) {

            var indexPageViewModels = require('mainPage/indexPageViewModels');
            var viewModel = indexPageViewModels.getLogInViewModel();

            // token exists
            var token = localStorageHelper.getToken();
            if (token == null) {
                viewModel.setlogInFocus();
                return;
            }

            // check token


            // token prooved
            viewModel.loggedIn(true);
        },

        // LogIn
        logIn: function() {

            var indexPageViewModels = require('mainPage/indexPageViewModels');
            var viewModel = indexPageViewModels.getLogInViewModel();

            viewModel.resetValidation();
            authenticationApi.logIn(viewModel.userName(), viewModel.password(), authenticationLogic.logInSucceed);
        },
        logInSucceed: function(logInResult) {

            var indexPageViewModels = require('mainPage/indexPageViewModels');
            var viewModel = indexPageViewModels.getLogInViewModel();

            if (!logInResult.success) {
                authenticationLogic.showLogInValidationErros(logInResult.errors);
            }
            else {
                viewModel.loggedIn(true);
                localStorageHelper.setToken(logInResult.token);
                localStorageHelper.setUserName(logInResult.user.name);
                localStorageHelper.setUserRoles(logInResult.user.roles);
            }
        },
        showLogInValidationErros: function(errors) {

            var indexPageViewModels = require('mainPage/indexPageViewModels');
            var viewModel = indexPageViewModels.getLogInViewModel();

            errors.forEach(function(error) {

                /** @namespace error.errorMessage */
                /** @namespace error.field */

                //noinspection JSValidateTypes
                if (error.field == 'name') {

                    viewModel.setUserNameValidationError(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == 'password') {

                    viewModel.setPasswordValidationError(error.errorMessage);
                }
            });
        }
    };

    return authenticationLogic;
});