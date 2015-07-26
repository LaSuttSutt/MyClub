/*
 Capsules all ViewModels of the index page
 */
define(function(require) {

    return {

        indexPageViewModel: function() {

            this.loggedIn = ko.observable(false);
        }
    };
});