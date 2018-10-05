let OrganizationPageGalleryConstants = requireV('../../../../../../js/public/organizations/constants/OrganizationPageGalleryConstants');

class OrganizationPageGalleryController {
    init () {
        this.initMagnificPopup();
        this.initScrollToTop();
        this.initHistorybackLink();
    }

    initMagnificPopup() {
        $(OrganizationPageGalleryConstants.galleryItemSelector).magnificPopup({
            delegate: 'a',
            type: 'image',
            image: {
                titleSrc: function(item) {
                    return item.el.find('img').attr('title');
                }
            },
            gallery: {
                navigateByImgClick: true,
                enabled:true,
                tCounter: '%curr% з %total%',
                tPrev: '',
                tNext: '',
                tClose: '',
                tLoading: '...',
            }
        })
    }

    initScrollToTop () {
        const $buttonScroll2Top = $(OrganizationPageGalleryConstants.buttonScroll2Top);
        const offset = 300;
        const duration = 300;

        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $buttonScroll2Top.fadeIn(duration);
            } else {
                $buttonScroll2Top.fadeOut(duration);
            }
        })

        $buttonScroll2Top.click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, duration);

            return false;
        })
    };

    initHistorybackLink() {
        $(OrganizationPageGalleryConstants.linkBackHistory).click(function() {
            window.history.back();
        })
    }
}

module.exports = OrganizationPageGalleryController;
