class Conference {
    constructor (conference) {
        this.conference = conference;
    }

    render () {
        let priceBlock = '';

        if (this.conference.prices.length && !this.conference.isFinished) {
            priceBlock = `${this.conference.prices[0].amount}<icon class="icon-${this.conference.prices[0].currency.code}"></icon>`;
        } else if (!this.conference.prices.length && !this.conference.isFinished) {
            priceBlock = 'Вільний вхід';
        } else {
            priceBlock = 'Завершено';
        }

        const $block = $(`
            <div>
                <div class="img-wrap">
                    <div class="conference-status ${!this.conference.prices.length && !this.conference.isFinished ? 'free' : ''} ${this.conference.isFinished ? 'finished' : ''}"> 
                        ${priceBlock}
                    </div>
                    <img src="${this.conference.image}" class="img-fill" alt="">
                </div>
                <div class="about-featured">
                    <div class="description">
                        <p>${this.conference.dateAdded}</p>
                        <p>Додано нову конференцію:</p>
                    </div>
                    <h6>${this.conference.name}</h6>
                </div>
                <div class="info-block">
                    <ul>
                        ${this.conference.location[0].city ? `<li class="city">${this.conference.location[0].city}</li>` : ''}
                        <li class="date">${ this.conference.dateEnd.includes(this.conference.dateStart) ? `${this.conference.dateEnd}` : `${this.conference.dateStart} - ${this.conference.dateEnd}` }</li>
                        </ul>
                    </div>
                </div>
        `);

        $block.click(() => {
            window.location.href = '/conference/' + this.conference.id;
        });

        return $block;
    }
}

module.exports = Conference;
