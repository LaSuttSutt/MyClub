/*
 ViewModel for the myClub view
 */
define(function(require) {

    var data = require('management/myClub/myClubViewData');
    var logic = require('management/myClub/myClubLogic');
    var mainData = require('startUp/startUpViewData');

    var self = {

        viewModel: function() {

            this.data = data;
            this.saveClubInfo = logic.saveClubInfo;
            this.saveEmblem = logic.saveEmblem;
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