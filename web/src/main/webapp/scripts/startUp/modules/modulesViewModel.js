/*
 ViewModel for the modules view
 */
define(function(require) {

    var logic = require('startUp/modules/modulesLogic');
    var mainData = require('startUp/startUpViewData');

    var self = {

        viewModel: function() {

            this.navigateToManagement = function() {
                logic.navigateToModule('/myclub/pages/management.html');
            };
            this.navigateToCoach = function() {
                //logic.navigateToModule('Hallo');
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