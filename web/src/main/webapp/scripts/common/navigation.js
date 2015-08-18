/*
 Capsules all methods for navigation
 */
define(function() {

    var self = {

        currentNavItem: ko.observable(),
        navigateTo: function(contentDom, view, control) {

            self.currentNavItem(control);

            var contentDomInst = $('#' + contentDom);
            contentDomInst.empty();
            contentDomInst.load(view);
        }
    };

    return self;
});


