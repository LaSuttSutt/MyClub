/*
 Capsules all data for the management page
 */
define(function () {

    return {
        navigation: ko.observable({

            contentDom: ko.observable('mainPageContent'),
            menuGroups: ko.observableArray([
                {
                    header: ko.observable('Haupt-Menü'),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Home'),
                            dom: ko.observable('navHome'),
                            view: ko.observable('../views/management/home.html')
                        },
                        {
                            text: ko.observable('Vereins-Mitglieder'),
                            dom: ko.observable('navMembers'),
                            view: ko.observable('../views/management/members.html')
                        }
                    ])
                },
                {
                    header: ko.observable('Administration'),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Mein Verein'),
                            dom: ko.observable('navMyClub'),
                            view: ko.observable('../views/management/myClub.html')
                        }
                    ])
                }
            ])
        })
    };
});