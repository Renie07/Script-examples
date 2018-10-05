class SpecialityTileView {
    constructor (speciality) {
        this.speciality = speciality;
    }

    render () {
        const $speciality = $(`
            <div>
                <input type="checkbox" name="specialties[]" value="${this.speciality.id}" id="speciality-${this.speciality.id}" class="checkbox">   
                 <label for="speciality-${this.speciality.id}">${this.speciality.name}</label>         
            </div>
        `);

        return $speciality;
    }
}

module.exports = SpecialityTileView;
