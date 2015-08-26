/*
 ViewModel for the editableText component
 */
define(function() {

    return function(params) {

        var self = this;

        this.text = ko.observable(params.text);
        this.tmpText = ko.observable(params.text);
        this.editMode = ko.observable(false);
        this.textHover = ko.observable(false);
        this.inputFocus = ko.observable(false);

        this.startEditMode = function() {
            self.editMode(true);
            self.inputFocus(true);
            self.tmpText(self.text());
        };
        this.cancelEditMode = function() {
            self.editMode(false);
            self.text(self.tmpText());
        };
        this.commitEditMode = function() {
            self.editMode(false);
        };
        this.startHover = function() {
            self.textHover(true);
        };
        this.endHover = function() {
            self.textHover(false);
        };
        this.inputKeyUp = function(data, event) {

            if (event.keyCode == 13) {
                self.commitEditMode();
            }
            else if (event.keyCode == 27) {
                self.cancelEditMode();
                return false;
            }

            return true;
        };
    };
});