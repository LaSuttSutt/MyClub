/*
Common methods
 */
function registerElementForResize(element) {
    element.style.height = calculateContentHeight();
    $(window).resize(function () {
        element.style.height = calculateContentHeight();
    });
}

function calculateContentHeight() {
    return innerHeight - 80 + 'px';
}
