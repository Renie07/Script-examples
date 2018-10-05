let ScoreBlock = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/ScoreBlock');

class Survey {
    constructor (survey) {
        this.survey = survey;
    }

    render () {
        const $block = $(`
            <div>
                <div class="img-wrap">
                    <img src="${this.survey.image}" class="img-fill" alt="">
                </div>
                <div class="about-featured">
                    <div class="description">
                        <p>${this.survey.dateAdded}</p>
                        <p>Додано нове опитування:</p>
                    </div>
                    <h6>${this.survey.name}</h6>
                </div>
                <div class="info-block"></div>
            </div>
        `);

        const scoreBlock = new ScoreBlock(this.survey.scores);

        $block.find('.info-block').append(scoreBlock.renderScoreBlock());

        $block.click(() => {
            window.location.href = '/surveys/' + this.survey.id;
        });

        return $block;
    }
}

module.exports = Survey;
