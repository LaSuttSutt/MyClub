/*
 ViewModel for the imageSelect component
 */
define(function(require) {

    var data = require('components/imageSelect/data');
    var logic = require('components/imageSelect/logic');

    return function(params) {

        this.data = data;
        data.setData(params);

        this.previewImage = logic.previewImage;
        this.onClose = function() {
            data.imageAreaSelect.setOptions( { hide: true } );
        };
        this.onShow = logic.initialize;
        this.onSave = params.onSave;
    };
});