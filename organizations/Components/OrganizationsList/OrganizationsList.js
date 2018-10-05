let FilterList = requireV('../../../../../../js/public/organizations/Components/OrganizationsList/FilterList')
let Organization = requireV('../../../../../../js/public/organizations/Components/OrganizationsList/Organization');
let Alphabet = requireV('../../../../../../js/public/organizations/Components/Alphabet');
let initShowAlphabetHandler = requireV('../../../../../../js/public/organizations/Components/initShowAlphabetHandler');
let sortByAlbhabet = requireV('../../../../../../../../js/public/lib/sortByAlphabet');

class OrganizationList {
    constructor (organizations, eventDispatcher) {
        this.organizationsListSorted = sortByAlbhabet(organizations, o => o.name.toLowerCase());
        this.list = this.normalizeData(this.organizationsListSorted);
        this.entityName = 'organizations';
        this.filter = 'Всі';
        this.organizationsList = this.list;
        this.lastIndex = 8;
        this.needToRender = false;
        this.eventDispatcher = eventDispatcher;
        this.eventDispatcher.listen(`${this.entityName}.filter`, (data) => {
            if (typeof data == 'null') return;

            switch (typeof data) {
                case 'string':
                    this.filter = data;

                    this.organizationsList = this.list.filter((organization) => {
                        return this.filter === 'Всі' || organization.name[0].toLowerCase() === this.filter.toLowerCase();
                    });
                    this.renderList();
                    break;

                case 'object':
                    this.organizationsList = new FilterList(data, this['list']).applyFilter();

                    this.renderList();
                    $organizationsAlphabetParentBlock.html(alphabet.render());
                    break;
            }
        });

        const alphabet = new Alphabet(this.eventDispatcher, this.entityName, this.organizationsList);
        const $organizationsAlphabetParentBlock = $('.js-organizations-alphabet');

        $organizationsAlphabetParentBlock.html(alphabet.render());
    }

    initShowAlphabetHandler() {
        initShowAlphabetHandler('#alphabet-organizations');
    }

    normalizeData (data) {
        return data.map((organization) => {
            return Object.assign({}, organization, {visible: true})
        })
    }

    sliceList(list) {
        return list.slice(0, this.lastIndex);
    }

    renderList () {
        const self = this;
        $('.js-organizations-list').empty();

        const visibleOrganizations = this.organizationsList.filter((organization) => {
            return organization.visible === true;
        });

        const slicedList = this.sliceList(visibleOrganizations);

        slicedList.forEach((organization, index) => {
            const $organizationBlock = new Organization(organization).render();

            $('.js-organizations-list').append($organizationBlock);

            if(this.lastIndex <= (visibleOrganizations.length - 1) ) {
                if (index === slicedList.length - 6) {
                    self.needToRender = true;
                    var waypoint = new Waypoint({
                        element: $organizationBlock[0],
                        handler: this.waypointHandler(self),
                        offset: 'bottom-in-view'
                    })
                }
            }
        });

        Waypoint.refreshAll();
    }

    waypointHandler (context) {
        return function () {
            if (!context.needToRender) {
                return;
            }
            if (context.lastIndex >= context.organizationsList.length) {
                context.needToRender = false;
                this.destroy();
            } else {
                context.lastIndex += 8;
                this.destroy();
                context.renderList()
            }
        }
    }
}

module.exports = OrganizationList;
