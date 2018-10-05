let ReferralConstants = requireV('../../../../../../js/public/referral/constants/ReferralConstants');
let PhoneModal = requireV('../../../../../../js/public/referral/Components/PhoneModal');

class ReferralController {
    constructor(referralData, eventDispatcher) {
        this.referralData = referralData;
        this.eventDispatcher = eventDispatcher;
        this.eventDispatcher.listen('copy.link', (data) => {
            this.copyLinkHandler(data);
        });
        this.eventDispatcher.listen('send.link', (link) => {
            this.submitSendLinkHandler(link);
        });
    }

    copyLinkHandler(data) {
        data.linkSelector.val(data.referralLink).select();
        document.execCommand(ReferralConstants.copyCommand);
    }

    submitSendLinkHandler(link) {
        const modal = new PhoneModal(this.referralData, link, this.submitSetPhoneHandler, this.disableSubmitButtonHandler);

        modal.render();
    }

    disableSubmitButtonHandler($input, $button) {
        if (!$input.val()) {
            $button.attr('disabled', 'disabled');
        } else {
            $button.removeAttr('disabled');
        }
    }

    submitSetPhoneHandler(data, $form, $submitBtn) {
        $.post('/rest/account/referral/sms', data)
            .success(function () {
                location.reload();
            })
            .error(function (data) {
                const text = 'Додати до бази не вдалося. Спробуйте пiзнiше.';

                const $submitInfoBlock = $form.find(ReferralConstants.errorSetPhoneSelector);

                $submitInfoBlock.empty();
                $submitInfoBlock.append(text);
                setTimeout(function () {
                    $submitInfoBlock.empty();
                    $submitBtn.removeAttr(ReferralConstants.disabledAttr);
                }, 3000)
            })
    }
}

module.exports = ReferralController;
