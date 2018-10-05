const SideBlock = class {
    constructor(customParams = []) {
        const defaultParams = {
            bodySelector: 'body',
            sideBlock: '.js-sideBlock',
            overlayBlock: '.js-overlay',
            handlerButton: '.js-show-hide-sideBlock',
            closeBtnClass: 'close-btn',
            openClass: 'open',
            visibleOverlayClass: 'is-visible',
            bodyClassSideBlockOpen: 'sideBlockOpen'
        };
        this.params = Object.assign({}, defaultParams, customParams);
    }

    initSideBLock () {
        let self = this;

        $(self.params.handlerButton).click(function () {

            if ($(self.params.sideBlock).hasClass(self.params.openClass)) {
                $(self.params.overlayBlock).removeClass(self.params.visibleOverlayClass);
                $(self.params.sideBlock).removeClass(self.params.openClass);
                $(this).removeClass(self.params.closeBtnClass);
                $(self.params.bodySelector).removeClass(self.params.bodyClassSideBlockOpen);
            } else {
                $(self.params.overlayBlock).addClass(self.params.visibleOverlayClass);
                $(self.params.sideBlock).addClass(self.params.openClass);
                $(self.params.sideBlock).addClass(self.params.openClass);
                $(this).addClass(self.params.closeBtnClass);
                $(self.params.bodySelector).addClass(self.params.bodyClassSideBlockOpen);
            }
        });

        $(self.params.overlayBlock).click(function() {
            $(this).removeClass(self.params.visibleOverlayClass);
            $(self.params.sideBlock).removeClass(self.params.openClass);
            $(self.params.handlerButton).removeClass(self.params.closeBtnClass);
        })
    }
};

module.exports = SideBlock;
