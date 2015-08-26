/*
 Capsules all common stuff
 */
define(function(require) {

    var localStoreHelper = require('../common/localStorageHelper');
    var data = require('startUp/startUpViewData');

    var common = {

        checkStyleColor: function() {

            var color = localStoreHelper.getStyleColor();
            if (color == null) {
                color = '/club/css/styleRed.css';
                localStoreHelper.setStyleColor(color);
            }

            common.reloadStyleColor(color);
        },
        reloadStyleColor: function(cssFile) {

            var oldlink = document.getElementsByTagName("link").item(3);

            var newlink = document.createElement("link");
            newlink.setAttribute("rel", "stylesheet");
            newlink.setAttribute("type", "text/css");
            newlink.setAttribute("href", cssFile);

            document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
            localStoreHelper.setStyleColor(cssFile);
        },
        getTokenHeader: function() {
            return {
                userId: localStoreHelper.getUserId(),
                tokenId: localStoreHelper.getTokenId()
            };
        },
        handleAjaxErros: function() {

            $(document).ajaxError(function (p1, error) {

                switch (error.status) {

                    case 404:
                        data.global.finishLoading();
                        data.global.setError('Keine Verbindung zum Server');
                        break;

                    case 401:
                        data.global.finishLoading();
                        window.location.reload();
                        break;

                    case 403:
                        data.global.finishLoading();
                        data.global.setError('Sie haben nicht die entsprechende Berechtigung');
                        break;

                    default:
                        data.global.finishLoading();
                        data.global.setError(error.statusText);
                        break;
                }
            });

            $(document).ajaxSuccess(function () {

                data.global.error(false);
            })
        }
    };

    return common;
});