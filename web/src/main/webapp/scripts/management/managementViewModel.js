/*
 ViewModel for the management page
 */
define(function(require) {

    var data = require('management/managementViewData');

    var self = {

        viewModel: function() {

            this.data = data;
        },
        initializeView: function() {

            // Binding
            var dom = $('#mainPage')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        },
        registerComponents: function() {

            ko.components.register('navigationButton', {
                viewModel: { require: 'management/components/navigation/navigationButton' },
                template: { require: '../js/text!management/components/navigation/navigationButton.html' }
            });

            ko.components.register('mainPageNavigation', {
                viewModel: { require: 'management/components/mainPage/mainPageNavigation' },
                template: { require: '../js/text!management/components/mainPage/mainPageNavigation.html' }
            });
        }
    };

    // Components
    self.registerComponents();

    return self;
});