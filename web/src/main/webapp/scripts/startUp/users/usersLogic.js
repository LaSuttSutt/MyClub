/*
 Capsules all logic for the users view
 */
define(function(require) {

    var api = require('startUp/users/usersApi');
    var data = require('startUp/users/usersViewData');
    var mainData = require('startUp/startUpViewData');

    return {

        // Loading
        loadAllUsers: function() {

            mainData.global.loadingInfo(true);

            api.loadAllUsers().then(
                function(loadedUsers) {

                    data.allUsersView.allUsers(loadedUsers);
                    mainData.global.finishLoading();
                }
            )
        }
    };
});