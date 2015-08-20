/*
 Startup-Module for the application
 */
requirejs(['startUp/startUpViewModel', 'startUp/startUpLogic' , 'common/common', 'authentication/authentication',
        'common/componentLoader'],
    function(model, logic, common, authentication) {

        authentication.checkAuthentication().then(function() {

            common.checkStyleColor();
            logic.setModulesMenu();
            model.initializeView();

        }, function() {

            common.checkStyleColor();
            logic.setLogInMenu();
            model.initializeView();
        });
    }
);