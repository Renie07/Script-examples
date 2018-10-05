class Information {
    constructor (informationData) {
        this.data = informationData;
    }

    render () {
        const $block = $(`
         <div>${this.data}</div>
        `);

        return $block;
    }
}

module.exports = Information;
