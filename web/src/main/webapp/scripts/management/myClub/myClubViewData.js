/*
 Capsules all data for the myClub view
 */
define(function() {

    var self = {
        id: ko.observable(),
        clubName: ko.observable(''),
        setClubInfo: function(clubInfo) {
            self.id(clubInfo.id);
            self.clubName(clubInfo.clubName);
        },
        getClubInfo: function() {
            return {
                id: self.id(),
                clubName: self.clubName()
            }
        }
    };

    return self;
});