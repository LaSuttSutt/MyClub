/*
 ViewModel fot he StartUp page
 */
define(function(require) {

    var data = require('startUp/startUpViewData');
    var authentication = require('authentication/authentication');

    var self = {

        viewModel: function() {

            this.authentication = data.authentication;

            this.logIn = authentication.logIn;
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