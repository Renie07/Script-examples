let ScoreBlock = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/ScoreBlock');

class Material {
    constructor (material) {
        this.material = material;
    }

    render () {
        const $block = $(`
            <div>
                <div class="img-wrap">
                    <img src="${this.material.image}" class="img-fill" alt="">
                </div>
                <div class="about-featured">
                    <div class="description">
                        <p>${this.material.dateAdded}</p>
                        <p>Додано новий матеріал:</p>
                    </div>
                    <h6>${this.material.name}</h6>
                </div>
                <div class="info-block"></div>
            </div>
        `);

        const scoreBlock = new ScoreBlock(this.material.scores);

        $block.find('.info-block').append(scoreBlock.renderScoreBlock());

        $block.click(() => {
            window.location.href = '/material/' + this.material.id;
        });

        return $block;
    }
}

module.exports = Material;
