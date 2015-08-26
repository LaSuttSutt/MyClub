/*
 ViewModel for the pageLayout component
 */
define(function(require) {

    var authentication = require('authentication/authentication');
    var mainData = require('startUp/startUpViewData');

    return function(params) {

        this.isIndexPage = (window.location.pathname == '/club/index.html' || window.location.pathname == '/club/');

        this.authentication = mainData.authentication;
        this.global = mainData.global;
        this.user = mainData.user;
        this.navigation = params.navigation;
        this.contentDom = params.contentDom;
        this.doInitialNavigation = params.doInitialNavigation;

        this.logOut = authentication.logOut;
    };
});
