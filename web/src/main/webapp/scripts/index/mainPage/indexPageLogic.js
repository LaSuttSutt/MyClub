/*
 Capsules the logic for the index page
 */
define(function(require) {

    var common = require('../../common/common');
    var localStoreHelper = require('../../common/localStoreHelper');
    var viewModels = require('mainPage/indexPageViewModels');

    var indexPageLogic = {

        onPageStartup: function() {

            common.checkStyleColor();
            indexPageLogic.doIndexPageBindings();
        },
        doIndexPageBindings: function() {

            ko.applyBindings(new viewModels.indexPageViewModel(), $('#indexPage')[0]);
        }
    };

    return indexPageLogic;
});
