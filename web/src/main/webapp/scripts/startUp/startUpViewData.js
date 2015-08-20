/*
 Capsules all data for the SratUp page
 */
define(function() {

    var self = {

        authentication: {

            loggedIn: ko.observable(false),
            userName: ko.observable(),
            userNameValidation: ko.observable(''),
            password: ko.observable(),
            passwordValidation: ko.observable(''),
            focus: ko.observable(false)
        },
        user: {
            userId: ko.observable('')
        },
        global: {
            error: ko.observable(false),
            errorMessage: ko.observable(''),
            setError: function(message) {
                self.global.error(true);
                self.global.errorMessage(message);
                self.global.loading(false);
            },
            loading: ko.observable(false),
            loadingInfo: ko.observable(false),
            finishLoading: function() {
                self.global.loading(false);
                self.global.loadingInfo(false);
            }
        },
        navigation: ko.observable(),
        navLogIn: ko.observable({

            contentDom: ko.observable('startUpContent'),
            menuGroups: ko.observableArray([
                {
                    header: ko.observable('Anmelden'),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Anmelden'),
                            dom: ko.observable('navLogIn'),
                            view: ko.observable('/myclub/views/startUp/logIn.html'),
                            visible: ko.observable(false)
                        }
                    ])
                }
            ])
        }),
        navModules: ko.observable({

            contentDom: ko.observable('startUpContent'),
            menuGroups: ko.observableArray([
                {
                    header: ko.observable('Module'),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Verwaltung'),
                            dom: ko.observable('navManagement'),
                            view: ko.observable('/myclub/views/startUp/modules.html'),
                            visible: ko.observable(false)
                        }
                    ])
                },
                {
                    header: ko.observable('Administration'),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Benutzer'),
                            dom: ko.observable('navUsers'),
                            view: ko.observable('/myclub/views/startUp/users.html'),
                            visible: ko.observable(true)
                        }
                    ])
                }
            ])
        })
    };

    return self;
});