/*
 ViewModel for the errorInfo component
 */
define(function(require) {

    var data = require('startUp/startUpViewData');

    return function() {

        this.data = data.global;
    };
});