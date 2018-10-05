class ScoreBlock {
    constructor (data) {
        this.scores = data;
    }

    getScoreName(key) {
        let names = {
            edu: 'Освітні бали',
            soc: 'Cоціальні бали',
            bon: 'Бонусні бали',
        };

        return names[key];
    }

    renderScoreBlock() {
        const $block = $(`
                <div class="score-inline"></div>
            `);

        for (var key in this.scores) {
            const value = parseInt(this.scores[key]);
            $block.append($(`<a class="score score-${key}">${value}<span>${this.getScoreName(key)}</span></a>`));
        }

        return $block;
    }
}

module.exports = ScoreBlock;
