/*
 ViewModel for the navigationMenu component
 */
define(function(require) {


    var navigation = require('common/navigation');

    return function(params) {

        var self = this;

        this.data = params.data;
        this.currentNavItem = navigation.currentNavItem;

        this.navigate = function(item) {
            navigation.navigateTo(self.data().contentDom(), item.view(), item.dom());
        };
    }
});