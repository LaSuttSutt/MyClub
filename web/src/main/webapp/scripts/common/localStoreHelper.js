/*
 Capsules all helper methods for the localStorage
 */
define(function() {

    return {

        getStyleColor: function() {
            return localStorage.getItem('STYLE_COLOR');
        },
        setStyleColor: function(color) {
            localStorage.setItem('STYLE_COLOR', color);
        }
    };
});
