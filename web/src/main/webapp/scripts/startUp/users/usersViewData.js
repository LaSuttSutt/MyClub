/*
 Capsules all data for the users view
 */
define(function() {

    var self = {

        allUsersView: {
            allUsers: ko.observableArray(),
            confirmDeleteMessage: ko.observable('Soll der Benutzer wirklich gelöscht werden?'),
            userToDelete: ko.observable()
        },
        manageUserView: {

            isNewUser: ko.observable(false),

            id: ko.observable(),
            name: ko.observable(),
            shortName: ko.observable(),
            email: ko.observable(),
            password: ko.observable(),
            roles: ko.observable(),
            allRoles: ko.observableArray(),

            nameValidation: ko.observable(''),
            shortNameValidation: ko.observable(''),
            emailValidation: ko.observable(''),
            passwordValidation: ko.observable(''),
            rolesValidation: ko.observable(''),

            setManagedUser: function(user, newUser) {

                var data = self.manageUserView;

                data.id(user.id);
                data.isNewUser(newUser);
                data.name(user.name);
                data.shortName(user.shortName);
                data.email(user.email);
                data.password(user.password);
                data.roles(user.roles);

                self.manageUserView.resetValidation();
            },
            getManagedUser: function() {

                var userData = self.manageUserView;

                return {
                    id: userData.id(),
                    name: userData.name(),
                    shortName: userData.shortName(),
                    email: userData.email(),
                    password: userData.password(),
                    roles: userData.roles()
                };
            },
            resetValidation: function() {

                self.manageUserView.nameValidation('');
                self.manageUserView.shortNameValidation('');
                self.manageUserView.passwordValidation('');
                self.manageUserView.rolesValidation('');
                self.manageUserView.emailValidation('');
            }
        }
    };

    return self;
});