let SpecialityTileView = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/SpecialitiesList/SpecialityTileView');
let SpecialitiesSelectView = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/SpecialitiesList/SpecialitiesSelectView');

class SpecialitiesList {
    constructor (specialities, listType) {
        this.specialities = specialities;
        this.listType = listType;
        this.myspecialities = 'mySpecialities';
    }

    render() {
        return this.listType == this.myspecialities ? this.renderSpecialityTileView() : this.renderSpecialitiesSelectView();
    }


    renderSpecialityTileView () {
        $('.js-specialities-list-block').empty();

        const $specialitiesBlock = $(`
            <div class="my-categories flex wrap-flex"></div>
        `);

        this.specialities.forEach((speciality) => {
            const $specialityBlock = new SpecialityTileView(speciality).render();

            $specialitiesBlock.append($specialityBlock);

        })

        $('.js-specialities-list-block').append($specialitiesBlock);
    }

    renderSpecialitiesSelectView () {
        $('.js-specialities-list-block').empty();


        const $specialitiesBlock = $(`
            <div>
                <label class="filter-label">Спеціальність:</label>
            </div>
        `);

        const $specialitiesList = new SpecialitiesSelectView(this.specialities).render();

        $specialitiesBlock.append($specialitiesList);

        $('.js-specialities-list-block').append($specialitiesBlock);

    }
}

module.exports = SpecialitiesList;
