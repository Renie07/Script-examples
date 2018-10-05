const TabsScroll = class {

    constructor(customParams = []) {
       const defaultParams = {
           tabMenuBlock: '.js-tabs-menu',
       };
       this.params = Object.assign({}, defaultParams, customParams);
    }

    initTabsScroll () {
        let self = this;

        $(self.params.tabMenuBlock+'> ul > li').click (function(){
            const $menuBlock = $(self.params.tabMenuBlock);
            const $menu = $menuBlock.find('ul');
            const currentLeft = $menu.position().left;
            const elementOffset = $(this).offset().left;
            const elementWidth = $(this).width();
            const blockWidth = $(self.params.tabMenuBlock).width();
            const left = ((elementOffset + elementWidth / 2) - blockWidth / 2) - currentLeft;

            $menuBlock.animate({scrollLeft: left  }, 200);
        })
    }
};

module.exports = TabsScroll;
