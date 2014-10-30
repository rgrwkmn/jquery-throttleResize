define('jquery.throttledResize', ['jquery'], function($) {
    var resizeTimeout = null;
    $(window).resize(function(e) {
        //if the window is \still being resized, do not let the resizeTimeout finish and execute
        if (resizeTimeout !== null) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(function() {
            $(window).trigger('throttledResize', e);
        }, 250);
    });
});