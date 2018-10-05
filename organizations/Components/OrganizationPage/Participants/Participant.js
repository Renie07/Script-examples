class Participant {
    constructor (participant) {
        this.participant = participant;
    }

    render () {
        const $block = $(`
            <div class="flex-center">
                <div class="participant-photo">
                    ${this.participant.image ? `<img src="${this.participant.image}" class="img-fill" alt="" />` : ''}
                </div>
                <div class="participant-content">
                    <p class="name">${this.participant.name}</p>
                    <p>${this.participant.workPlace ? this.participant.workPlace : ''}</p>
                </div>
            </div>
        `)

        return $block;
    }
}

module.exports = Participant;
