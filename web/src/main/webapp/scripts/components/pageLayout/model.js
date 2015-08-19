/*
 ViewModel for the pageLayout component
 */
define(function(require) {

    var mainData = require('startUp/startUpViewData');

    return function(params) {

        this.authentication = mainData.authentication;
        this.navigation = params.navigation;
        this.contentDom = params.contentDom;
        this.doInitialNavigation = params.doInitialNavigation;
    };
});
