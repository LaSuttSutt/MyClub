/*
 ViewModel for the users view
 */
define(function(require) {

    var data = require('startUp/users/usersViewData');
    var logic = require('startUp/users/usersLogic');

    var self = {

        viewModel: function() {

            this.data = data;
        },
        initializeView: function() {

            // Loading
            logic.loadAllUsers();

            // Binding
            var dom = $('#usersView')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        }
    };

    return self;
});