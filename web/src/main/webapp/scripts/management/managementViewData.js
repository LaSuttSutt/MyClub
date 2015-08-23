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
                    visible: ko.observable(true),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Home'),
                            dom: ko.observable('navHome'),
                            view: ko.observable('/myclub/views/management/home.html'),
                            visible: ko.observable(true)
                        },
                        {
                            text: ko.observable('Vereins-Mitglieder'),
                            dom: ko.observable('navMembers'),
                            view: ko.observable('/myclub/views/management/members.html'),
                            visible: ko.observable(true)
                        }
                    ])
                },
                {
                    header: ko.observable('Administration'),
                    visible: ko.observable(true),
                    items: ko.observableArray([
                        {
                            text: ko.observable('Mein Verein'),
                            dom: ko.observable('navMyClub'),
                            view: ko.observable('/myclub/views/management/myClub.html'),
                            visible: ko.observable(true)
                        }
                    ])
                }
            ])
        })
    };
});