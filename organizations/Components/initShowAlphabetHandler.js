let OrganizationAlphabetConstants = requireV('../../../../../../js/public/organizations/constants/OrganizationAlphabetConstants');

function initShowAlphabetHandler (alphabetSelector) {
    $(OrganizationAlphabetConstants.alphabetControlLinksSelector).click(function () {
        const $alphabetList = $(alphabetSelector).find(OrganizationAlphabetConstants.alphabetList);

        if ($alphabetList.hasClass(OrganizationAlphabetConstants.showClass)) {
            $alphabetList.removeClass(OrganizationAlphabetConstants.showClass);
            $(alphabetSelector).find($(OrganizationAlphabetConstants.showAlphabetTextSelector)).removeClass(OrganizationAlphabetConstants.hideClass);
            $(alphabetSelector).find($(OrganizationAlphabetConstants.hideAlphabetTextSelector)).addClass(OrganizationAlphabetConstants.hideClass);
        } else {
            $alphabetList.addClass(OrganizationAlphabetConstants.showClass);
            $(alphabetSelector).find($(OrganizationAlphabetConstants.showAlphabetTextSelector)).addClass(OrganizationAlphabetConstants.hideClass);
            $(alphabetSelector).find($(OrganizationAlphabetConstants.hideAlphabetTextSelector)).removeClass(OrganizationAlphabetConstants.hideClass);
        }
    });
}

module.exports = initShowAlphabetHandler;
