/*
 Capsules the logic for the index page
 */
define(function(require) {

    var common = require('../../common/common');
    var localStoreHelper = require('../../common/localStoreHelper');

    return {

        onPageStartup: function() {

            common.checkStyleColor();
        }
    };
});
