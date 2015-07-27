/*
 Capsules the logic for the index page
 */
define(function(require) {

    var common = require('../../common/common');
    var viewModels = require('mainPage/indexPageViewModels');
    var authenticationLogic = require('authentication/authenticationLogic');

    var indexPageLogic = {

        onPageStartup: function() {

            common.checkStyleColor();
            indexPageLogic.doIndexPageBindings();
            authenticationLogic.checkAuthentication(viewModels);
        },
        doIndexPageBindings: function() {

            ko.applyBindings(new viewModels.indexPageViewModel(), viewModels.indexPageViewModelDom());
        }
    };

    return indexPageLogic;
});
