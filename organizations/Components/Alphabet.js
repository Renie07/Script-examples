class Alphabet {
    constructor (eventDispatcher, entityName, list) {
        this.eventDispatcher = eventDispatcher;
        this.entityName = entityName;
        this.ukraininanAlphabet = [
            'А',
            'Б',
            'В',
            'Г',
            'Ґ',
            'Д',
            'Е',
            'Є',
            'Ж',
            'З',
            'И',
            'І',
            'Ї',
            'Й',
            'К',
            'Л',
            'М',
            'Н',
            'О',
            'П',
            'Р',
            'С',
            'Т',
            'У',
            'Ф',
            'Х',
            'Ц',
            'Ч',
            'Ш',
            'Щ',
            'Ю',
            'Я',
        ];
        this.englishAlphabet = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ];

        this.list = list;
    }

    render () {
        const { eventDispatcher, entityName } = this;
        const $block = $(`
        <ul class="alphabet flex wrap-flex">
            <li data-id="all" class="current">Всі</li>
        </ul>
        `);

        this.ukraininanAlphabet.filter((letter) => {
            return this.list.filter((element) => element.name[0].toLowerCase() === letter.toLowerCase() && element.visible == true).length;
        }).forEach((letter) => {
            $block.append($(`<li title="${letter}">${letter}</li>`))
        })

        $block.append($(`<li class="break"></li>`))

        this.englishAlphabet.filter((letter) => {
            return this.list.filter((element) => element.name[0].toLowerCase() === letter.toLowerCase() && element.visible == true).length;
        }).forEach((letter) => {
            $block.append($(`<li title="${letter}">${letter}</li>`))
        })

        $block.find('li:not(.break)').click(function () {
            $block.find('li').removeClass('current');
            $(this).addClass('current');
            eventDispatcher.dispatch(`${entityName}.filter`, $(this).text())
        });

        return $block;
    }
}

module.exports = Alphabet;
