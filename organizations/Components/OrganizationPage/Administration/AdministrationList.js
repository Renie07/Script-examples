let Administration = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Administration/Administration');

class AdministrationList {
    constructor (list) {
        this.list = list;
    }

    render () {
        $('.js-administration-list').empty();

        Object.values(this.list).forEach((item, index) => {
            const $administrationBlock = new Administration(item).render();

            $('.js-administration-list').append($administrationBlock);
        })
    }
}

module.exports = AdministrationList;
