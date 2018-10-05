class SpecialitiesSelectView {
    constructor (specialities) {
        this.specialities = specialities;
    }

    render () {
        const $specialitiesSelect = $(`
            <select name="specialities">
                <option value="0">Всі</option>
            </select>
        `);

        this.specialities.forEach((speciality) => {
            const $speciality = $(`
                <option value="${speciality.id}">${speciality.name}</option>
            `);

            $specialitiesSelect.append($speciality);

        });

        return $specialitiesSelect;
    }
}

module.exports = SpecialitiesSelectView;
