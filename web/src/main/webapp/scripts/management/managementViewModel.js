/*
 ViewModel for the management page
 */
define(function(require) {

    var data = require('management/managementViewData');
    var navigation = require('common/navigation');

    var self = {

        viewModel: function() {

            var self = this;

            this.data = data;
            this.contentDom = data.navigation().contentDom();

            // Navigation
            this.doInitialNavigation = function() {

                var item = data.navigation().menuGroups()[0].items()[0];
                navigation.navigateTo(self.contentDom, item.view(), item.dom());
            };
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