/*
 ViewModel for the myClub view
 */
define(function(require) {

    var data = require('management/myClub/myClubViewData');
    var mainData = require('startUp/startUpViewData');

    var self = {

        viewModel: function() {

            this.data = data;
        },
        initializeView: function() {

            // Loading
            mainData.global.finishLoading();

            // Binding
            var dom = $('#myClubView')[0];
            ko.cleanNode(dom);
            ko.applyBindings(new self.viewModel(), dom);
        }
    };

    return self;
});