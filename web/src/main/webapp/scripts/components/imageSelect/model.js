/*
 ViewModel for the imageSelect component
 */
define(function() {

    var calculateImage = function(imgAreaSelect, source) {

        var img = new Image;
        img.onload = function() {

            var selectionLength = img.width;
            if (img.height < img.width) {
                selectionLength = img.height;
            }

            if (selectionLength > 295) {
                selectionLength = 295;
            }

            imgAreaSelect.setOptions( { x1:0, y1:0, x2:selectionLength, y2:selectionLength } );
        };

        img.src = source;
    };

    return function(params) {

        var self = this;

        this.modalId = params.modalId;
        this.title = params.title;
        this.btnCloseId = 'btnCloseSelectImageDialog';
        this.imgAreaSelect = undefined;
        this.source = ko.observable('');

        this.showImage = function(data, event) {

            var input = event.currentTarget;
            if (input.files && input.files[0]) {

                self.imgAreaSelect = $('#emblem').imgAreaSelect({
                    handles: true,
                    aspectRatio: "1:1",
                    instance: true,
                    onSelectEnd: function (img, selection) {

                    }
                });

                var reader = new FileReader();
                reader.onload = function (e) {

                    self.source(e.target.result);
                    calculateImage(self.imgAreaSelect, e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        };
        this.onClose = function() {
            if (self.imgAreaSelect) {
                self.imgAreaSelect.setOptions({hide: true});
            }
        };
        this.onSave = function() {};
    };
});