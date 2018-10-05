let ReferralController = requireV('../../../../../../js/public/referral/controller/ReferralController');
let GenerateReferralLink = requireV('../../../../../../js/public/referral/Components/GenerateReferralLink');
let StatisticsRegisteredUsersBlock = requireV('../../../../../../js/public/referral/Components/StatisticsUsersBlock');
let EventDispatcher = requireV('../../../../../../../../js/public/lib/EventDispatcher');

$(function () {
    let referrerData = {
        tel: user.phone
    }
    let referralLink = `https://accemedin.com/account/registration?referrer=${user.id}`;
    const eventDispatcher = new EventDispatcher();
    const referralController = new ReferralController(referrerData, eventDispatcher);
    const generateReferralLink = new GenerateReferralLink(referralLink, eventDispatcher);
    const statisticsRegisteredUsersBlock = new StatisticsRegisteredUsersBlock(referralData, eventDispatcher);

    generateReferralLink.render();
    statisticsRegisteredUsersBlock.initStatisticsRegisteredUsersBlock();
});
