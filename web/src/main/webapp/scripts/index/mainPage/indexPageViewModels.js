/*
 Capsules all ViewModels of the index page
 */
define(function(require) {

    var authenticationLogic = require('authentication/authenticationLogic');

    var indexPageViewModels = {

        indexPageViewModel: function() {

            this.logInViewModel = new indexPageViewModels.logInViewModel();
        },
        indexPageViewModelDom: function() {

            return $('#indexPage')[0];
        },
        logInViewModel: function() {

            var self = this;

            this.userName = ko.observable();
            this.userNameValidation = ko.observable();
            this.password = ko.observable();
            this.passwordValidation = ko.observable();
            this.loggedIn = ko.observable(false);

            // Methods
            this.logIn = authenticationLogic.logIn;
            this.setlogInFocus = function() {
                $('#logInName').focus();
            };

            // Validation
            this.resetValidation = function() {
                this.userNameValidation("");
                this.passwordValidation("");
                $('#logInName').parent().removeClass('has-error');
                $('#logInPwd').parent().removeClass('has-error');
            };
            this.setUserNameValidationError = function(message) {
                $('#logInName').parent().addClass('has-error');
                self.userNameValidation(message);
            };
            this.setPasswordValidationError = function(message) {
                $('#logInPwd').parent().addClass('has-error');
                self.passwordValidation(message);
            };
        },
        getIndexPageViewModel: function() {

            return ko.dataFor(indexPageViewModels.indexPageViewModelDom());
        },
        getLogInViewModel: function() {
            return ko.dataFor(indexPageViewModels.indexPageViewModelDom()).logInViewModel;
        }
    };

    return indexPageViewModels;
});