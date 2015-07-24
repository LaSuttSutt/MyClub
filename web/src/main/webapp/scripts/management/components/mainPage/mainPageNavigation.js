/*
 ViewModel for the mainPageNavigation
 */
define(function() {

    return function(params) {

        this.contentDiv = params.contentDiv;
        this.navDiv = params.navDiv;
        this.homeView = '../views/home.html';
        this.membersView = '../views/members.html';
        this.myClubView = '../views/myClub.html';
    };
});