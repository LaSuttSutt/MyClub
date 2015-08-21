/*
 Capsules all API methods of the userApi
 */
define(function(require) {

    var common = require('common/common');

    return {

        // Loading
        loadAllUsers: function() {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'GET',
                    url: '/myclub/api/user',
                    headers: common.getTokenHeader(),
                    success: resolve
                });
            });
        },

        // CRUD
        createUser: function() {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'GET',
                    url: '/myclub/api/user/new',
                    headers: common.getTokenHeader(),
                    success: resolve
                })
            });
        }
    };
});
