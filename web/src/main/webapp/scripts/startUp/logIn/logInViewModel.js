/*
 ViewModel for the logIn page
 */
define(function() {

    var self = {
        viewModel: function() {

        },
        initializeView: function() {

            // Binding
            var dom = $('#logInPage')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);

        },
        registerComponents: function() {
            ko.components.register('logInControl', {
                viewModel: { require: 'startUp/logIn/components/logInControl/model' },
                template: { require: '../js/text!startUp/logIn/components/logInControl/view.html' }
            });
        }
    };

    // Components
    self.registerComponents();

    return self;
});
