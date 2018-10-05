let TitleBlock = requireV('../../../../../../js/public/referral/Components/partsStatisticsUsersBlock/TitleBlock');
let RegisteredUsersBlock = requireV('../../../../../../js/public/referral/Components/partsStatisticsUsersBlock/RegisteredUsersBlock');

class StatisticsRegisteredUsersBlock {
    constructor (registeredUsersData, eventDispatcher) {
        this.data = registeredUsersData;
        this.eventDispatcher = eventDispatcher;
    }

    initStatisticsRegisteredUsersBlock() {
        $('.js-registered-users-titleBlock').empty();
        $('.js-registered-users-block').empty();

        this.renderTitle();
        this.renderRegisteredUsersBlock();
    }

    renderTitle() {
        const title = new TitleBlock(this.data);
        const $title = title.renderTitle();

        $('.js-registered-users-titleBlock').append($title);
    }

    renderRegisteredUsersBlock() {
        const block = new RegisteredUsersBlock(this.data, this.eventDispatcher);
        const $block = block.renderUsersBlock();

        $('.js-registered-users-block').append($block);
    }
}

module.exports = StatisticsRegisteredUsersBlock;
