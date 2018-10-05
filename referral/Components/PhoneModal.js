let LabelsAnimation = requireV('../../../../../../../../js/public/lib/LabelsAnimation');
let activeInputsLabel = requireV('../../../../../js/public/lib/ActiveInputsLabel');

class PhoneModal {
    constructor(referralData, referralLink, submitSetPhoneHandler, disableSubmitButtonHandler) {
        this.referralData = referralData;
        this.referralLink = referralLink;
        this.labelsAnimation = new LabelsAnimation();
        this.submitSetPhoneHandler = submitSetPhoneHandler;
        this.disableSubmitButtonHandler = disableSubmitButtonHandler;
    }

    render () {
        const self = this;
        const $block = $(`
            <div class="modal-overlay is-visible flex-center js-modal">
                <div class="modal-content">
                    <div class="close-block">
                        <span class="close js-close-modal-button"></span>
                    </div>
                    <h6>
                        Введіть свій номер телефону, щоб надіслати Вам повідомлення з посиланням для реєстрації лікарів
                    </h6>
                    <form action="/sd" class="js-set-phone-number">
                        <div class="form-group">
                            <label for="phone" class="form-label">Номер телефону</label>
                            <input type="text" name="phone" value="${this.referralData.tel}" id="phone" class="form-input" />
                        </div>
                        <div class="submit-block">
                            <input ${this.referralData.tel ? '' : 'disabled="disabled"'} type="submit" value="Надіслати" class="btn btn-default js-send-phone">
                        </div>
                        <div class="error-text js-error"></div>
                    </form>
                </div>
            </div>
        `);

        activeInputsLabel('.js-set-phone-number');
        this.labelsAnimation.initLabelsAnimation();

        const $phoneInput = $block.find('#phone'),
            $submitButton = $block.find('.js-send-phone');

        $block.find('#phone').mask("+3(80) XX-XXX-XX-XX", {
            translation: {
                'X': {
                    pattern: /[0-9]/
                },
            }
        });

        $block.find('.js-close-modal-button').click(() => {
            $block.remove();
        });

        $phoneInput.on('keyup paste', function() {
            self.disableSubmitButtonHandler($phoneInput, $submitButton);
        });

        let sendSmsFormSubmit = function() {
            const $form = $block.find('.js-set-phone-number'),
                $submitBtn = $form.find('.js-send-phone'),
                phoneVal = $block.find('#phone').val().replace(/-/gi, '').replace(/\)/gi, '').replace(/\(/gi, '').replace(/ /gi, '');

            const data = {
                phone: phoneVal,
                referralLink: self.referralLink
            };

            self.submitSetPhoneHandler(data, $form, $submitBtn);
        }

        $block.find('.js-set-phone-number').submit(function(e) {
            e.preventDefault();

           sendSmsFormSubmit();
        });

        $('body').append($block);
    }
}

module.exports = PhoneModal;
