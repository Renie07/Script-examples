const ScrollToTop = class {

    initScrollToTop (buttonScroll2Top) {
        const offset = 1000;
        const duration = 300;

        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $(buttonScroll2Top).fadeIn(duration);
            } else {
                $(buttonScroll2Top).fadeOut(duration);
            }
        })

        $(buttonScroll2Top).click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    };
};

module.exports = ScrollToTop;
