/*
 Capsules all data for the users view
 */
define(function() {

    var self = {

        allUsersView: {
            allUsers: ko.observableArray()
        },
        manageUserView: {
            name: ko.observable(),
            shortName: ko.observable(),
            email: ko.observable(),
            password: ko.observable(),
            roles: ko.observable(),

            nameValidation: ko.observable(''),
            shortNameValidation: ko.observable(''),
            passwordValidation: ko.observable(''),
            rolesValidation: ko.observable('')
        },
        setManagedUser: function(user) {

            var data = self.manageUserView;
            data.name(user.name);
        },
        getManagedUser: function() {
            return {

            };
        }
    };

    return self;
});