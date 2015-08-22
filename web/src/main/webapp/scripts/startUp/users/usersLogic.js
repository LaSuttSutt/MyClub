/*
 Capsules all logic for the users view
 */
define(function(require) {

    var api = require('startUp/users/usersApi');
    var data = require('startUp/users/usersViewData');
    var mainData = require('startUp/startUpViewData');

    var self = {

        // Loading
        loadAllUsers: function() {

            api.loadAllUsers().then(
                function(loadedUsers) {

                    data.allUsersView.allUsers(loadedUsers);
                    mainData.global.finishLoading();
                    $('#btnAddUser').blur();
                    $('#btnEditUser').blur();
                    $('#btnDeleteUser').blur();
                }
            )
        },
        loadUserRoles: function() {

            api.loadUserRoles().then(
                function(roles) {

                    data.manageUserView.allRoles(roles);
                }
            )
        },

        // Validation
        validateUser: function() {

            data.manageUserView.resetValidation();

            api.validateUser(data.manageUserView.getManagedUser()).then(function(errors) {

                if (errors.length > 0) {

                    self.showValidationErrors(errors);
                }
                else {

                    if (data.manageUserView.isNewUser()) {
                        self.storeUser();
                    }
                    else {
                        self.updateUser();
                    }
                }
            });
        },
        showValidationErrors: function(errors) {

            errors.forEach(function (error) {

                //noinspection JSValidateTypes
                if (error.field == "name") {
                    data.manageUserView.nameValidation(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == "shortName") {
                    data.manageUserView.shortNameValidation(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == "pwd") {
                    data.manageUserView.passwordValidation(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == "email") {
                    data.manageUserView.emailValidation(error.errorMessage);
                }

                //noinspection JSValidateTypes
                if (error.field == "roles") {
                    data.manageUserView.rolesValidation(error.errorMessage);
                }
            });
        },

        // CRUD
        createUser: function() {

            self.loadUserRoles();

            api.createUser().then(function(user) {
                data.manageUserView.setManagedUser(user, true);
            });
        },
        editUser: function(user) {

            self.loadUserRoles();
            data.manageUserView.setManagedUser(user, false);
        },
        confirmDelete: function(user) {

            data.allUsersView.userToDelete(user);
        },
        storeUser: function() {

            api.storeUser(data.manageUserView.getManagedUser()).then(
                function() {
                    self.closeManageUserDialog();
                }
            );
        },
        updateUser: function() {

            api.updateUser(data.manageUserView.getManagedUser()).then(
                function() {
                    self.closeManageUserDialog();
                }
            );
        },
        deleteUser: function() {

            api.deleteUser(data.allUsersView.userToDelete().id).then(
                function() {
                    self.closeConfirmDeleteDialog();
                }
            )
        },

        // Helper
        rolesCheckedChange: function(role) {

            var index = $.inArray(role, data.manageUserView.roles());
            if (index > -1) {
                data.manageUserView.roles().splice(index, 1);
            }
            else {
                data.manageUserView.roles().push(role);
            }

            return true;
        },
        closeManageUserDialogId: function() {

            return 'btnCloseManageUserDialog';
        },
        closeManageUserDialog: function() {

            $('#btnCloseManageUserDialog').click();
        },
        closeConfirmDeleteDialog: function() {
            $('#btnCloseConfirmDeleteUser').click();
        }
    };

    return self;
});