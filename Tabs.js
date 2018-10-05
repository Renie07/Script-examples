const Tabs = class {

    constructor(customParams = []) {
       const defaultParams = {
           tabMenuBlock: '.js-tabs-menu',
           tabContents: '.js-tab-contents',
           tabContentPanel: '.js-tab-panel',
           searchByAttr: 'data-tab',
           activeClass: 'active'
       };
       this.params = Object.assign({}, defaultParams, customParams);
    }

    initTabs () {
        let self = this;

        $(self.params.tabMenuBlock).find('li').click(function () {
            let tabId = $(this).attr(self.params.searchByAttr);

            $(this).siblings().removeClass(self.params.activeClass);
            $(this).addClass(self.params.activeClass);
            $(self.params.tabContents).children(self.params.tabContentPanel).removeClass(self.params.activeClass);
            $(`#${tabId}`).addClass(self.params.activeClass);
        })
    }
};

module.exports = Tabs;
