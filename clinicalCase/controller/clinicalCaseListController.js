let ClinicalCaseListConstants = requireV('../../../../../../js/public/clinicalCase/constants/ClinicalCaseListConstants');
let TabsScroll = requireV('../../../../../js/public/lib/TabsScroll');
let CasesRequests = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/CasesRequests/CasesRequests');
let ClinicalCasesList = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/ClinicalCasesList');
let SpecialitiesList = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/SpecialitiesList/SpecialitiesList');

class ClinicalCaseListController {
    constructor() {
        this.defaultCasesType = 'all';
        this.tabsScroll = new TabsScroll({
            tabMenuBlock: ClinicalCaseListConstants.tabCasesCategories
        });
        this.casesRequests = new CasesRequests(this.defaultCasesType);
        this.numberOfLoadCases = 10;
    }

    init () {
        this.tabsScroll.initTabsScroll();
        this.renderClinicalCasesList();
        this.renderSpecialitiesList();
        this.filterCases();
        this.loadNextCasesOnScroll();
    }

    renderClinicalCasesList(data) {
        this.casesRequests.getClinicalCasesList(data).then((list) => {
            const clinicalCasesList = new ClinicalCasesList(list),
                $clinicalCasesList = clinicalCasesList.renderList();

            $(ClinicalCaseListConstants.casesListBlock).append($clinicalCasesList);
        }).catch(() => {
        });
    }

    renderSpecialitiesList(data) {
        this.casesRequests.getClinicalCasesSpecialities(data).then((payload) => {
            const specialitiesList = new SpecialitiesList(payload.response, payload.type),
                $specialitiesList = specialitiesList.render();

            $(ClinicalCaseListConstants.specialitiesListBlock).append($specialitiesList);
        }).catch(() => {
        });
    }

    filterCases() {
        const self = this,
            $casesFilterForm = $(ClinicalCaseListConstants.casesFilterForm),
            pageData = {
                page: 1
            },
            $casesTypeSelectors = $casesFilterForm.find(ClinicalCaseListConstants.casesTypeRadioInput);

        $casesTypeSelectors.on('change', function() {
            const caseType = $(this).val();
            const caseTypeData = {
                casesType: caseType,
            }

            self.renderSpecialitiesList(caseTypeData);
        });

        $casesFilterForm.change(function() {
            const data = Object.assign({}, pageData, $(this).serializeObject());

            $(ClinicalCaseListConstants.casesListBlock).empty();
            self.renderClinicalCasesList(data);
        });
    }

    loadNextCasesOnScroll() {
        $(window).scroll(() => {
            if  (this.checkIfScrollToBottomPage()) {
                let casesQuantity = $(ClinicalCaseListConstants.caseItemBlock).length,
                    pageNumber,
                    pageData,
                    data = $(ClinicalCaseListConstants.casesFilterForm).serializeObject();

                if (!casesQuantity % this.numberOfLoadCases == 0) {
                    pageNumber = (casesQuantity / this.numberOfLoadCases) + 1;
                    pageData = {
                        page: pageNumber
                    };
                    data = Object.assign({}, pageData, data);

                    this.renderClinicalCasesList(data);
                }
            }
        });
    }

    checkIfScrollToBottomPage() {
        return $(window).scrollTop() == $(document).height() - $(window).height();
    }
}

module.exports = ClinicalCaseListController;
