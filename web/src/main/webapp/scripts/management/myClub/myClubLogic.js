/*
 Capsules all logic for the myClub view
 */
define(function(require) {

    var data = require('management/myClub/myClubViewData');
    var api = require('management/myClub/myClubApi');

    return {

        loadClubInfo: function() {

            api.loadClubInfo().then(data.setClubInfo);
        },
        saveClubInfo: function() {

            api.saveClubInfo(data.getClubInfo());
        }
    };
});