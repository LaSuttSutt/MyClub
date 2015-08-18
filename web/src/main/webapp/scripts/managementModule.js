/*
 Hauptmodul für die management page
 */
requirejs(['management/managementViewModel', 'common/common', 'authentication/authentication', 'common/componentLoader'],
    function(model, common, authentication) {

        common.checkStyleColor();
        model.initializeView();
        authentication.checkAuthentication();
    }
);
