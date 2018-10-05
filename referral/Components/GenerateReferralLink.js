class GenerateReferralLink {
    constructor (referralLink, eventDispatcher) {
        this.link = referralLink;
        this.eventDispatcher = eventDispatcher;
    }

    render () {
        $('.js-generate-referral-form').empty();

        const $block = $(`
                <form class="" action="">
                    <input type="text" class="form-input js-link" name="referralLink" value="${this.link}" />
                    <div class="submit-block">
                        <button class="btn btn-default js-copy-link" type="button">Скопіювати</button>
                        <button class="btn btn-primary js-submit" type="button">Відправити на мій номер</button>
                    </div>
                </form>            
        `);

        const link = $block.find('.js-link').val();
        const $linkSelector = $block.find('.js-link');

        $block.find('.js-copy-link').on('click', (e) => {
            e.preventDefault();

            this.eventDispatcher.dispatch('copy.link', {
                referralLink: link,
                linkSelector: $linkSelector
            });
        });

        $block.find('.js-submit').on('click', (e) => {
            e.preventDefault();

            this.eventDispatcher.dispatch('send.link', link);
        });

        $('.js-generate-referral-form').append($block);
    }
}

module.exports = GenerateReferralLink;
