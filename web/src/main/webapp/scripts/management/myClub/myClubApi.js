/*
 Capsules all API Methods for the ClubApi
 */
define(function(require) {

    var common = require('common/common');

    return {

        loadClubInfo: function() {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'GET',
                    url: '/myclub/api/club',
                    success: resolve
                });
            });
        },
        saveClubInfo: function(clubInfo) {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'POST',
                    url: '/myclub/api/club',
                    headers: common.getTokenHeader(),
                    success: resolve,
                    contentType: "application/json",
                    data: JSON.stringify(clubInfo)
                })
            });
        }
    };
});
