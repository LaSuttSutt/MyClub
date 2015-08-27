/*
 ViewModel for the pageLayout component
 */
define(function(require) {

    var authentication = require('authentication/authentication');
    var mainData = require('startUp/startUpViewData');
    var clubData = require('management/myClub/myClubViewData');

    return function(params) {

        this.isIndexPage = (window.location.pathname == '/myclub/index.html' || window.location.pathname == '/myclub/');

        this.authentication = mainData.authentication;
        this.global = mainData.global;
        this.user = mainData.user;
        this.club = clubData;
        this.navigation = params.navigation;
        this.contentDom = params.contentDom;
        this.doInitialNavigation = params.doInitialNavigation;

        this.logOut = authentication.logOut;
    };
});
