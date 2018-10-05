class FilterList {
    constructor (filterData, list) {
        this.filterData = filterData;
        this.list = list;
    }

    applyFilter () {
        return this.list.map((organization) => {
            const keys = Object.keys(this.filterData);

            organization.visible = true;

            keys.forEach((key) => {
                if ((Array.isArray(this.filterData[key])) && this.filterData[key].includes('0') || this.filterData[key] == 0)  {
                    organization.visible = true;
                } else {
                    const data = this.filterData[key].includes(organization[key].id.toString());

                    (data) ? organization.visible = true : organization.visible = false;
                }
            });

            return organization;
        });
    }
}

module.exports = FilterList;
