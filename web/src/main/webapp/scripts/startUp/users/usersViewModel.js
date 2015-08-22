/*
 ViewModel for the users view
 */
define(function(require) {

    var data = require('startUp/users/usersViewData');
    var logic = require('startUp/users/usersLogic');

    var self = {

        viewModel: function() {

            this.data = data.allUsersView;

            this.manageUserDialogShow = function() {
                $('#userName').select();
            };
            this.manageUserDialogClose = function() {

                logic.loadAllUsers();
            };
            this.createUser = logic.createUser;
            this.editUser = logic.editUser;
            this.confirmDelete = logic.confirmDelete;
            this.deleteUser = logic.deleteUser;
            this.validateUser = logic.validateUser;
            this.btnCloseId = logic.closeManageUserDialogId();
        },
        initializeView: function() {

            // Loading
            logic.loadAllUsers();

            // Binding
            var dom = $('#usersView')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        },
        registerComponents: function() {

            ko.components.register('manageUserDialog', {
                viewModel: { require: 'startUp/users/components/manageUserDialog/model' },
                template: { require: '../js/text!startUp/users/components/manageUserDialog/view.html' }
            });
        }
    };

    // Components
    self.registerComponents();

    return self;
});