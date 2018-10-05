let OrganizationsList = requireV('../../../../../../js/public/organizations/Components/OrganizationsList/OrganizationsList');
let CategoriesList = requireV('../../../../../../js/public/organizations/Components/CategoriesList/CategoriesList');
let EventDispatcher = requireV('../../../../../js/public/lib/EventDispatcher');
let getUniqueList = requireV('../../../../../../../../js/public/lib/getUniqueList');

$(function () {
    let organizationsType = [];

    Object.values(organizations).forEach((organization) => {
        organizationsType = organizationsType.concat(organization.organizationType);
    });

    let uniqueOrganizationsType = getUniqueList(organizationsType);

    const eventDispatcher = new EventDispatcher();

    var organizationsList = new OrganizationsList(organizations, eventDispatcher);
    organizationsList.initShowAlphabetHandler();
    organizationsList.renderList();

    var categoriesList = new CategoriesList(uniqueOrganizationsType, eventDispatcher);
    categoriesList.renderList();

});
