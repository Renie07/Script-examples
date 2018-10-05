let ClinicalCase = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/ClinicalCase');

class ClinicalCasesList {
    constructor (list) {
        this.list = list;
    }

    renderList () {
        this.list.forEach((clinicalCase, index) => {
            const $clinicalCaseBlock = new ClinicalCase(clinicalCase).render();

            $('.js-cases-list').append($clinicalCaseBlock);
        });
    }
}

module.exports = ClinicalCasesList;
