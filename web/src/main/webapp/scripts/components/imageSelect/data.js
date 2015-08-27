/*
 Capsules all data for the imageSelect component
 */
define(function() {

    var self = {

        imageAreaSelect: {},
        modalId: ko.observable(),
        title: ko.observable(),
        btnCloseId: 'btnCloseSelectImageDialog',
        source: ko.observable(''),
        ratio: ko.observable(),
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
        }
    };

    return self;
});