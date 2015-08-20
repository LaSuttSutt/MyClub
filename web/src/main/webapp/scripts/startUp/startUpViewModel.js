/*
 ViewModel fot he StartUp page
 */
define(function(require) {

    var data = require('startUp/startUpViewData');
    var logic = require('startUp/startUpLogic');
    var authentication = require('authentication/authentication');
    var navigation = require('common/navigation');

    var self = {

        viewModel: function() {

            this.data = data;
            this.contentDom = data.navigation().contentDom();
            this.authentication = data.authentication;

            // Navigation
            this.doInitialNavigation = logic.doInitialNavigation;
        },
        initializeView: function() {

            // Binding
            var dom = $('#indexPage')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        }
    };

    return self;
});