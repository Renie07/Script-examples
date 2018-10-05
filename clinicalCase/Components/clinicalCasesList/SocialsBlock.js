class SocialsBlock {
    constructor (data) {
        this.data = data;
    }

    renderSocialsBlock() {
        const $block = $(`
                <ul></ul>
            `);

        for (var key in this.data) {
            const value = parseInt(this.data[key]);
            $block.append($(`<li class="${key} ${(value) ? 'has-value' : ''}">${(value) ? value : '-'}</li>`));
        }

        return $block;
    }
}

module.exports = SocialsBlock;
