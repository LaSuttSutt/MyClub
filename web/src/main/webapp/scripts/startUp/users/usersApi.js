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
        loadUserRoles: function() {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'GET',
                    url: '/myclub/api/user/roles',
                    headers: common.getTokenHeader(),
                    success: resolve
                })
            });
        },

        // Validation
        validateUser: function(user) {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'POST',
                    url: '/myclub/api/user/validate',
                    headers: common.getTokenHeader(),
                    success: resolve,
                    contentType: "application/json",
                    data: JSON.stringify(user)
                })
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
        },
        storeUser: function(user) {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'POST',
                    url: '/myclub/api/user',
                    headers: common.getTokenHeader(),
                    success: resolve,
                    contentType: "application/json",
                    data: JSON.stringify(user)
                });
            });
        },
        updateUser: function(user) {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'POST',
                    url: '/myclub/api/user/update',
                    headers: common.getTokenHeader(),
                    success: resolve,
                    contentType: "application/json",
                    data: JSON.stringify(user)
                });
            });
        },
        deleteUser: function(userId) {

            return new Promise(function(resolve) {

                $.ajax({
                    type: 'DELETE',
                    url: '/myclub/api/user/' + userId,
                    headers: common.getTokenHeader(),
                    success: resolve
                });
            });
        }
    };
});
