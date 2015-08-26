/*
 Hauptmodul für die management page
 */
requirejs(['management/managementViewModel', 'common/common', 'authentication/authentication', 'common/componentLoader'],
    function(model, common, authentication) {

        authentication.checkAuthentication().then(function() {

            common.checkStyleColor();
            model.initializeView();

        }, function() {

            window.location = "/club/index.html";
        });
    }
);
