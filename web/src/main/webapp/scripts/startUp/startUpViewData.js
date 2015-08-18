/*
 Capsules all data for the SratUp page
 */
define(function() {

    return {

        authentication: {

            loggedIn: ko.observable(false),
            userName: ko.observable(),
            userNameValidation: ko.observable(''),
            password: ko.observable(),
            passwordValidation: ko.observable(''),
            focus: ko.observable(false)
        }
    };
});