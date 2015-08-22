/*
 ViewModel for the manageUserDialog component
 */
define(function(require) {

    var data = require('startUp/users/usersViewData');
    var logic = require('startUp/users/usersLogic');

    return function() {

        this.data = data.manageUserView;
        this.rolesCheckedChange = logic.rolesCheckedChange;
    };
});