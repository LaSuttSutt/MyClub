/*
 ViewModel for the modules view
 */
define(function(require) {

    var logic = require('startUp/modules/modulesLogic');
    var mainData = require('startUp/startUpViewData');

    var self = {

        viewModel: function() {

            this.data = mainData;

            this.navigateToManagement = function() {
                logic.navigateToModule('/club/pages/management.html');
            };
            this.navigateToCoach = function() {

            };
            this.navigateToPlayer = function() {

            };
        },
        initializeView: function() {

            // Loading
            mainData.global.finishLoading();

            // Binding
            var dom = $('#modulesView')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        }
    };

    return self;
});