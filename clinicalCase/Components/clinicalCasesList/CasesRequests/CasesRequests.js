class CasesRequests {
    constructor (defaultCasesType) {
        this.defaultCasesType = defaultCasesType;
        this.defaultDataCasesList = {
            casesType: this.defaultCasesType,
            page: 1
        };
        this.defaultDataCasesType = {
            casesType: this.defaultCasesType,
        }
    }

    getClinicalCasesList(dataCasesList) {
        const dataRequest = (dataCasesList == undefined) ? this.defaultDataCasesList : dataCasesList;

        return new Promise( (resolve, reject) => {
            $.ajax(
                {
                    type: 'GET',
                    url: '',
                    data: dataRequest
                }
            ).done((response) => {
                resolve(response);
            }).fail(reject);
        });
    }


    getClinicalCasesSpecialities(dataCasesType) {
        const dataRequest = (dataCasesType == undefined) ? this.defaultDataCasesType : dataCasesType;

        return new Promise( (resolve, reject) => {
            $.ajax(
                {
                    type: 'GET',
                    url: '',
                    data: dataRequest
                }
            ).done((response) => {
                resolve({response: response, type: dataRequest.casesType});
            }).fail(reject);
        });
    }
}

module.exports = CasesRequests;
