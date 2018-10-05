class TitleBlock {
    constructor (registeredUsersData) {
        this.data = registeredUsersData;
    }

    renderTitle () {
        const $block = $(`
            <h4>База зареєстрованих лікарів</h4>
            <h6>Загальна кількість: ${this.data.length}</h6>            
        `);

        return $block;
    }
}

module.exports = TitleBlock;
