let Information = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Information/Information');

class InformationTab {
    constructor (informationData) {
        this.informationData = informationData;
    }

    render () {
        $('.js-organization-info').empty();

        const $information = new Information(this.informationData).render();
        $('.js-organization-info').append($information);
    }
}

module.exports = InformationTab;
