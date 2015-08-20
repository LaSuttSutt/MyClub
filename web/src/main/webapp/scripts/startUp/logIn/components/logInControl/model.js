/*
 ViewModel fot the logInControl component
 */
define(function(require) {

    var data = require('startUp/startUpViewData');
    var logic = require('startUp/startUpLogic');
    var authentication = require('authentication/authentication');

    return function() {

        this.authentication = data.authentication;
        this.logIn = function() {
            authentication.logIn().then(function() {
                logic.setModulesMenu();
            });
        };
    };
});
