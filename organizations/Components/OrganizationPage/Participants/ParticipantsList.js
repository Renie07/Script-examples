let Participant = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/Participants/Participant');
let Pagination = requireV('../../../../../../../../js/public/lib/Pagination');
let Alphabet = requireV('../../../../../../js/public/organizations/Components/Alphabet');
let sortByAlphabet = requireV('../../../../../../../../js/public/lib/sortByAlphabet');

class ParticipantsList {
    constructor (participants, eventDispatcher) {
        this.participantsBlock = '.js-participants-block';
        this.participantsPerPage = 16;
        this.currentPage = 1;
        this.eventDispatcher = eventDispatcher;
        this.entityName = 'participants';
        this.filter = 'Всі';
        this.organizationsListSorted = sortByAlphabet(participants, participant => participant.name.toLowerCase());
        this.participants = this.normalizeData(this.organizationsListSorted);

        this.visibleParticipants = this.participants;

        eventDispatcher.listen(`${this.entityName}.previous`, () => {
            this.currentPage--;

            this.render();
        })
        eventDispatcher.listen(`${this.entityName}.next`, () => {
            this.currentPage++;

            this.render();
        })

        eventDispatcher.listen(`${this.entityName}.filter`, (text) => {
            this.currentPage = 1;
            this.filter = text;

            this.visibleParticipants = this.participants.filter((participant) => {
                return this.filter === 'Всі' || participant.name[0].toLowerCase() === this.filter.toLowerCase()
            });

            this.render();
        })

        const alphabet = new Alphabet(this.eventDispatcher, this.entityName, this.participants);
        const $participantsParentBlock = $('.js-participants-page');
        $participantsParentBlock.find('.js-participants-alphabet').html(alphabet.render());
    }

    normalizeData (data) {
        return data.map((organization) => {
            return Object.assign({}, organization, {visible: true})
        })
    }

    render () {
        const $participantsBlock = $(this.participantsBlock);
        const $participantsListBlock = $('<div class="participants-grid"></div>');
        const paginationBlock = new Pagination(this.visibleParticipants, this.participantsPerPage, this.currentPage, this.eventDispatcher, this.entityName, $participantsBlock);

        $participantsBlock.empty();

        this.visibleParticipants.slice(this.participantsPerPage * (this.currentPage - 1), this.participantsPerPage * this.currentPage)
            .forEach((participant) => {
                const participantBlock = new Participant(participant, this.eventDispatcher);

                $participantsListBlock.append(participantBlock.render());
            });

        $participantsBlock.append($participantsListBlock);
        $participantsBlock.append(paginationBlock.render());
    }
}

module.exports = ParticipantsList;
