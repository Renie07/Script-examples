class JoinModal {
    render () {
        const $block = $(`
            <div id="joinForm" class="modal-overlay is-visible flex-center js-modal">
                <div class="modal-content">
                    <div class="close-block">
                        <span class="close js-close-modal-button"></span>
                    </div>
                    <h6>
                        Щоб вступити до організації, заповніть ім'я та прізвище в портфоліо
                    </h6>
                    <div class="join-submit-block">
                        <button class="btn join-submit-btn">До заповнення портфоліо</button>
                    </div>
                </div>
            </div>
        `);

        $block.find('.js-close-modal-button').click(() => {
            $block.remove();
        });

        $block.find('.join-submit-btn').click(function () {
            window.location.href = '/profile/edit';
        });

        $('body').append($block);
    }
}

module.exports = JoinModal;
