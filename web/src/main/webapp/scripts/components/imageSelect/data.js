/*
 Capsules all data for the imageSelect component
 */
define(function() {

    var self = {

        imageAreaSelect: {},
        modalId: ko.observable(),
        title: ko.observable(),
        source: ko.observable(''),
        ratio: ko.observable(),
        validationInfo: ko.observable(''),
        selection: undefined,
        selectedImage: undefined,
        selectedImageArray: undefined,
        setData: function(params) {

            self.modalId(params.modalId);
            self.title(params.title);
            self.ratio(params.ratio);
        },
        getImageTransfer: function() {

            return {
                image: btoa(self.selectedImageArray),
                cutLeft: self.selection.x1,
                cutTop: self.selection.y1,
                cutWidth: self.selection.width,
                cutHeight: self.selection.height,
                clientWidth: self.selectedImage.clientWidth,
                clientHeight: self.selectedImage.clientHeight
            };
        },
        setSelection: function(x1, y1, x2, y2) {
            self.selection = {
                x1: x1,
                y1: y1,
                width: x2 - x1,
                height: y2 - y1
            };
        }
    };

    return self;
});