function getUniqueList (list) {
    let uniqueList = [];

    list.forEach((listItem) => {
        if (!uniqueList.filter((uniqueListItem) => {
            return listItem.id === uniqueListItem.id;
        }).length) {
            uniqueList.push(listItem)
        }
    });

    return uniqueList;
}

module.exports = getUniqueList;
