/*
 Capsules all methods for navigation
 */
define(function() {

    return {

        navigateTo: function(contentDiv, view, control, navId) {

            $('#' + navId).children().children().removeClass('active');
            $('#' + control).addClass('active');

            var contentDivInst = $('#' + contentDiv);
            contentDivInst.empty();
            contentDivInst.load(view);
        }
    };
});


