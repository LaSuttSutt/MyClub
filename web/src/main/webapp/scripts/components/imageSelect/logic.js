/*
 Capsules the logic for the imageSelect component
 */
define(function(require) {

    var data = require('components/imageSelect/data');

    var self = {

        setPreSelection: function() {

            var dom = $('#emblem')[0];
            var width = dom.width;
            var height = dom.height;
            var selectionLength = width;
            var location = 0;

            if (height < width) {
                selectionLength = height;
            }

            if (selectionLength > 295) {
                selectionLength = 295;
            }

            if (selectionLength > 75) {
                selectionLength -= 40;
                location += 20;
            }

            data.imageAreaSelect.setOptions( { x1:location, y1:location, x2:selectionLength, y2:selectionLength } );
        },
        initialize: function() {

            data.imageAreaSelect = $('#emblem').imgAreaSelect({
                handles: true,
                aspectRatio: data.ratio(),
                instance: true,
                onSelectEnd: function (img, selection) {
                    data.selection = selection;
                    data.selectedImage = img;
                }
            });
        },
        previewImage: function(d, event) {

            var input = event.currentTarget;

            if (input.files && input.files[0]) {

                var urlReader = new FileReader();
                var fileReader = new FileReader();

                urlReader.onload = function(e) {

                    data.source(e.target.result);
                    self.setPreSelection();
                };
                urlReader.readAsDataURL(input.files[0]);

                fileReader.onload = function(e) {

                    data.selectedImageArray = e.target.result;
                };
                fileReader.readAsBinaryString(input.files[0]);
            }
        }
    };

    return self;
});