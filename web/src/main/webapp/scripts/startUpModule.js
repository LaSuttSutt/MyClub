/*
 Startup-Module for the application
 */
requirejs(['startUp/startUpViewModel', 'startUp/startUpLogic' , 'common/common', 'authentication/authentication',
        'management/myClub/myClubLogic', 'common/componentLoader'],
    function(model, logic, common, authentication, clubLogic) {

        authentication.checkAuthentication().then(function() {

            clubLogic.loadClubInfo();
            common.handleAjaxErros();
            common.checkStyleColor();
            logic.setModulesMenu();
            model.initializeView();

        }, function() {

            clubLogic.loadClubInfo();
            common.handleAjaxErros();
            common.checkStyleColor();
            logic.setLogInMenu();
            model.initializeView();
        });
    }
);