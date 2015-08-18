/*
 Startup-Module for the application
 */
requirejs(['startUp/startUpViewModel', 'common/common', 'authentication/authentication', 'common/componentLoader'],
    function(model, common, authentication) {

        common.checkStyleColor();
        model.initializeView();
        authentication.checkAuthentication();
    }
);