/*
 Capsules all logic for the myClub view
 */
define(function(require) {

    var data = require('management/myClub/myClubViewData');
    var api = require('management/myClub/myClubApi');
    var imageData = require('components/imageSelect/data');

    return {

        loadClubInfo: function() {

            api.loadClubInfo().then(data.setClubInfo);
        },
        saveClubInfo: function() {

            api.saveClubInfo(data.getClubInfo());
        },
        saveEmblem: function() {

            var imageTransfer = imageData.getImageTransfer();
            api.saveEmblem(imageTransfer).then(function() {

            });
        }
    };
});