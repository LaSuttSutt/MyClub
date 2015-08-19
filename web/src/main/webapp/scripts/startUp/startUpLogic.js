/*
 Capsules all logic for the startUp page
 */
define(function(require) {

    var data = require('startUp/startUpViewData');
    var navigation = require('common/navigation');

    var self = {
        setModulesMenu: function() {
            data.navigation(data.navModules());
            self.doInitialNavigation();
        },
        setLogInMenu: function() {
            data.navigation(data.navLogIn());
            self.doInitialNavigation();
        },
        doInitialNavigation: function() {
            var item = data.navigation().menuGroups()[0].items()[0];
            navigation.navigateTo(data.navigation().contentDom(), item.view(), item.dom());
        }
    };

    return self;
});