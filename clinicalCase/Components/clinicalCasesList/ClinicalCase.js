let SocialsBlock = requireV('../../../../../../js/public/clinicalCase/Components/clinicalCasesList/SocialsBlock');

class ClinicalCase {
    constructor (clinicalCase) {
        this.clinicalCase = clinicalCase;
    }

    render () {
        let specialities = [];

        Object.values(this.clinicalCase.specialties).forEach((specialty) => {
            specialities = specialities.concat(specialty.name);
        });

        const $block = $(`
            <div class="case-item js-case-item flex ${this.clinicalCase.isDecided ? 'is-decided' : ''}">
                <div class="img-block"><img src="${this.clinicalCase.image}" alt="" class="img-fill" /></div>
                <div class="description-block">
                    <h6>
                        ${specialities.join(', ')}                    
                    </h6>
                    <h5>${this.clinicalCase.title}</h5>
                    <div class="flex-center detailes-block">
                        <div class="author-name">${this.clinicalCase.author}, ${this.clinicalCase.dateAdded}</div>
                        <div class="social-block"></div>
                    </div>
                </div>
            </div>
        `);

        const socialsBlock = new SocialsBlock(this.clinicalCase.socials);

        $block.find('.social-block').append(socialsBlock.renderSocialsBlock());

        $block.click(() => {
            window.location.href = '/clinicalCases/' + this.clinicalCase.id;
        });

        return $block;
    }
}

module.exports = ClinicalCase;
