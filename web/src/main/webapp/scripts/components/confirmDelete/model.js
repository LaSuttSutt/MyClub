/*
 ViewModel for the confirmDelete component
 */
define(function() {

    return function(params) {

        this.modalId = params.modalId;
        this.message = params.message;
        this.onConfirm = params.onConfirm;
        this.btnCloseId = params.btnCloseId;
        this.onClose = params.onClose;
    };
});
