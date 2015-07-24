/*
 Capsules all methods for navigation
 */
function navigateTo(contentDiv, view, control, navId) {

    $('#' + navId).children().children().removeClass('active');
    $('#' + control).addClass('active');

    var contentDivInst = $('#' + contentDiv);
    contentDivInst.empty();
    contentDivInst.load(view);
}
