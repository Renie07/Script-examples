class RegisteredUsersList {
    constructor (registeredUsersData) {
        this.list = registeredUsersData;
    }

    renderList () {
        const $block = $(`
                <table>
                    <thead>
                         <tr>
                            <th>Ім'я</th>
                            <th>Прізвище</th>
                            <th>Email</th>
                            <th>Телефон</th>
                            <th>дата реєстрації</th>
                            <th>Матерiали</th>
                            <th>Курси</th>
                            <th>Опитування</th>
                        </tr>
                    </thead>
                    <tbody></tbody>           
                </table>            
        `);

        this.list.forEach((item) => {
            const $item = $(`
                <tr>
                    <td>${item.first_name ? item.first_name : '' }</td>
                    <td>${item.last_name ? item.last_name : ''}</td>
                    <td>${item.email ? item.email : ''}</td>
                    <td>${item.phone ? item.phone : ''}</td>
                    <td>${item.registrationDate}</td>
                    <td>${item.materialCount}</td>
                    <td>${item.courseCount}</td>
                    <td>${item.surveyCount}</td>
                </tr>
            `);

            $block.find('tbody').append($item);

        });

        return $block;
    }
}

module.exports = RegisteredUsersList;
