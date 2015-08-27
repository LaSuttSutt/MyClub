/*
 Hauptmodul für die management page
 */
requirejs(['management/managementViewModel', 'common/common', 'authentication/authentication',
        'management/myClub/myClubLogic', 'common/componentLoader'],
    function(model, common, authentication, clubLogic) {

        authentication.checkAuthentication().then(function() {

            clubLogic.loadClubInfo();
            common.checkStyleColor();
            model.initializeView();

        }, function() {

            window.location = "/myclub/index.html";
        });
    }
);
