/*
 Capsules all logic for KnockoutBindings
 */
define(function(){

    return {

        initializeComponents: function() {

            /** @namespace ko.components */

            ko.components.register('navigationButton', {
                viewModel: { require: 'components/navigation/navigationButton' },
                template: { require: '../../js/text!components/navigation/navigationButton.html' }
            });

            ko.components.register('mainPageNavigation', {
                viewModel: { require: 'components/mainPage/mainPageNavigation' },
                template: { require: '../../js/text!components/mainPage/mainPageNavigation.html' }
            });
        }
    };
});