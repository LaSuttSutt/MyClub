/*
 Capsules all helper methods for the localStorage
 */
define(function() {

    return {

        getStyleColor: function() {
            return localStorage.getItem('MYCLUB_STYLE_COLOR');
        },
        setStyleColor: function(color) {
            localStorage.setItem('MYCLUB_STYLE_COLOR', color);
        }
    };
});
