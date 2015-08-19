/*
 Startup-Module for the application
 */
requirejs(['startUp/startUpViewModel', 'startUp/startUpLogic' , 'common/common', 'authentication/authentication',
        'common/componentLoader'],
    function(model, logic, common, authentication) {

        authentication.checkAuthentication(function(ok) {

            common.checkStyleColor();
            model.initializeView();

            if (ok) {
                logic.setModulesMenu();
            }
        });
    }
);