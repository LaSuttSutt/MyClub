/*
 Capsules all logic for the MainPage
 */
define(function(require) {

    var common = require('../../common/common');
    var bindingLogic = require('components/bindingLogic');
    var viewModels = require('mainPage/mainPageViewModels');

    var mainPageLogic = {

        onPageStartup: function() {

            bindingLogic.initializeComponents();
            mainPageLogic.doMainPageBindings();
            common.checkStyleColor();

            $('#mainPageContent').load('../views/home.html');
        },
        doMainPageBindings: function() {

            ko.applyBindings(new viewModels.mainPageViewModel(), $('#MainPage')[0]);
        }
    };

    return mainPageLogic;
});
