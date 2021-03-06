/*
 ViewModel for the modalDialog component
 */
define(function() {

    return function(params) {

        this.modalId = params.modalId;
        this.title = params.title;
        this.body = params.body;
        this.btnCloseId = params.btnCloseId;
        this.onSave = params.onSave;
        this.onShow = params.onShow;
        this.onClose = params.onClose;
    };
});
