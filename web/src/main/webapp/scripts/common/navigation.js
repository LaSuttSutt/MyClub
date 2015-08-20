/*
 Capsules all methods for navigation
 */
define(function(require) {

    var mainData = require('startUp/startUpViewData');

    var self = {

        currentNavItem: ko.observable(),
        navigateTo: function(contentDom, view, control) {

            self.currentNavItem(control);

            var contentDomInst = $('#' + contentDom);
            contentDomInst.empty();
            contentDomInst.load(view);

            mainData.global.loading(true);
        }
    };

    return self;
});


