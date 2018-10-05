let ScoreBlock = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/ScoreBlock');

class Course {
    constructor (course) {
        this.course = course;
    }

    render () {
        const $block = $(`
            <div>
                <div class="img-wrap">
                    <img src="${this.course.image}" class="img-fill" alt="">
                </div>
                <div class="about-featured">
                    <div class="description">
                        <p>${this.course.dateAdded}</p>
                        <p>Додано новий навчальний курс:</p>
                    </div>
                    <h6>${this.course.name}</h6>
                </div>
                <div class="info-block"></div>
            </div>
        `);

        const scoreBlock = new ScoreBlock(this.course.scores);

        $block.find('.info-block').append(scoreBlock.renderScoreBlock());

        $block.click(() => {
            window.location.href = '/course/' + this.course.id;
        })

        return $block;
    }
}

module.exports = Course;
