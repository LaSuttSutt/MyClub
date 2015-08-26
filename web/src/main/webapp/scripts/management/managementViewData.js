/*
 Capsules all data for the management page
 */
define(function (require) {

    var mainData = require('startUp/startUpViewData');

    return {
        navigation: ko.observable({

            contentDom: ko.observable('mainPageContent'),
            menuGroups: ko.observableArray([
                {
                    header: ko.observable('Haupt-Menü'),
                    visible: mainData.user.isManagement,
                    items: ko.observableArray([
                        {
                            text: ko.observable('Vereins-Mitglieder'),
                            dom: ko.observable('navMembers'),
                            view: ko.observable('/club/views/management/members.html'),
                            visible: ko.observable(true)
                        }
                    ])
                },
                {
                    header: ko.observable('Einstellungen'),
                    visible: mainData.user.isManagement,
                    items: ko.observableArray([
                        {
                            text: ko.observable('Mein Verein'),
                            dom: ko.observable('navMyClub'),
                            view: ko.observable('/club/views/management/myClub.html'),
                            visible: ko.observable(true)
                        }
                    ])
                }
            ])
        })
    };
});