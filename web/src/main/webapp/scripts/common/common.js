/*
 Capsules all common stuff
 */
define(function(require) {

    var localStoreHelper = require('../common/localStorageHelper');

    var common = {

        checkStyleColor: function() {

            var color = localStoreHelper.getStyleColor();
            if (color == null) {
                color = '/myclub/css/styleRed.css';
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
        }
    };

    return common;
});