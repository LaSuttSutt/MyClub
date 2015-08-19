/*
 ViewModel fot the logInControl component
 */
define(function(require) {

    var data = require('startUp/startUpViewData');
    var authentication = require('authentication/authentication');

    return function() {

        this.authentication = data.authentication;
        this.logIn = authentication.logIn;
    };
});
