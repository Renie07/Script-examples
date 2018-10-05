let SearchRegisteredUsers = requireV('../../../../../../js/public/referral/Components/partsStatisticsUsersBlock/partsRegisteredUsersBlock/SearchRegisteredUsers');
let RegisteredUsersList = requireV('../../../../../../js/public/referral/Components/partsStatisticsUsersBlock/partsRegisteredUsersBlock/RegisteredUsersList');
let searchInTable = requireV('../../../../../../../../js/public/lib/searchInTable');

class RegisteredUsersBlock {
    constructor (registeredUsersData, eventDispatcher) {
        this.data = registeredUsersData;
        this.eventDispatcher = eventDispatcher;
    }

    renderUsersBlock () {
        const $block = $(`<div></div>`);

        const $searchBlock = $('<div class="search-registered-users js-search-registered-users"></div>');
        const $usersListBlock = $('<div class="registered-users-list js-registered-users-list"></div>');
        const searchRegisteredUsers = new SearchRegisteredUsers(this.eventDispatcher);
        const registeredUsersList = new RegisteredUsersList(this.data);

        $searchBlock.empty();
        $usersListBlock.empty();

        $searchBlock.append(searchRegisteredUsers.renderSearch());
        $usersListBlock.append(registeredUsersList.renderList());

        $block.append($searchBlock);
        $block.append($usersListBlock);

        this.eventDispatcher.listen('filter.registered.user', (data) => {
            searchInTable(data, $usersListBlock);
        });

        return $block;
    }
}

module.exports = RegisteredUsersBlock;
