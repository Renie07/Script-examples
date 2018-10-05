let OrganizationPageConstants = requireV('../../../../../../js/public/organizations/constants/OrganizationPageConstants');
let Tabs = requireV('../../../../../js/public/lib/Tabs');
let TabsScroll = requireV('../../../../../js/public/lib/TabsScroll');
let JoinModal = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/JoinModal');
let initShowAlphabetHandler = requireV('../../../../../../js/public/organizations/Components/initShowAlphabetHandler');
let scrollSidebar = requireV('../../../../../../../../js/public/lib/scrollSidebar');

class OrganizationPageController {
    constructor(userData, organizationData) {
        this.userData = userData;
        this.organizationData = organizationData;
        this.tabs = new Tabs();
        this.tabsScroll = new TabsScroll();
    }

    init () {
        this.tabs.initTabs();
        this.tabsScroll.initTabsScroll();
        this.initMagnificPopup();
        initShowAlphabetHandler(OrganizationPageConstants.alphabetSelector);
        this.initJoin();
        scrollSidebar(OrganizationPageConstants.sideBlockSelector)
    }

    initMagnificPopup() {
        $(OrganizationPageConstants.galleryItemSelector).magnificPopup({
            delegate: 'a',
            type: 'image',
            image: {
                titleSrc: function(item) {
                    return item.el.find('img').attr('title');
                }
            },
            gallery: {
                navigateByImgClick: true,
                enabled: true,
                tCounter: '%curr% з %total%',
                tClose: '',
                tPrev: '',
                tNext: '',
                tLoading: '...',
            }
        })
    }

    submitJoinHandler(organizationData) {

        $.post(`/rest/organization/${organizationData.id}/join`)
            .success(function () {
                location.reload();
            })
        .error(function (data) {
            console.error(data);
        })
    }

    initJoin() {
        $(OrganizationPageConstants.joinModalSelector).click(function () {
            if (this.userData.firstName && this.userData.lastName) {
                this.submitJoinHandler(this.organizationData);
            } else {
                const modal = new JoinModal();
                modal.render();
            }
        }.bind(this));
    }
}

module.exports = OrganizationPageController;
