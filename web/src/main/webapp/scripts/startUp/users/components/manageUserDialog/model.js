/*
 ViewModel for the manageUserDialog component
 */
define(function(require) {

    var data = require('startUp/users/usersViewData');

    return function() {

        this.data = data.manageUserView;
    };
});