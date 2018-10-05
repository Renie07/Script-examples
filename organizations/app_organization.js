let OrganizationPageController = requireV('../../../../../../js/public/organizations/controller/OrganizationPageController');
let OrganizationInformation = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Information/InformationTab');
let OrganizationNews = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/NewsList');
let OrganizationParticipantsList = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Participants/ParticipantsList');
let OrganizationAdministrationList = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Administration/AdministrationList');
let EventDispatcher = requireV('../../../../../js/public/lib/EventDispatcher');

$(function () {
    const eventDispatcher = new EventDispatcher();
    const organizationPageController = new OrganizationPageController(user, organizationData);

    organizationPageController.init();

    let informationData = organizationData.information,
        newsData = organizationData.news,
        participantsData = organizationData.participants,
        administrationData = organizationData.administrations;

    const informationTab = new OrganizationInformation(informationData);
    informationTab.render();

    const organizationParticipantsList = new OrganizationParticipantsList(participantsData, eventDispatcher);
    organizationParticipantsList.render();

    const organizationAdministrationList = new OrganizationAdministrationList(administrationData);
    organizationAdministrationList.render();

    // newsTab = new OrganizationNews(newsData),

    //newsTab.render();
});
