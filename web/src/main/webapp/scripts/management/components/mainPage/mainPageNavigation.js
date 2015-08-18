/*
 ViewModel for the mainPageNavigation
 */
define(function() {

    return function(params) {

        this.contentDiv = params.contentDiv;
        this.navDiv = params.navDiv;
        this.homeView = '../views/management/home.html';
        this.membersView = '../views/management/members.html';
        this.myClubView = '../views/management/myClub.html';
    };
});