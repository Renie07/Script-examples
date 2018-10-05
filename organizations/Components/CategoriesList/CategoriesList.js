class CategoriesList {
    constructor (categories, eventDispatcher) {
        this.categories = categories;
        this.eventDispatcher = eventDispatcher;
        this.entityName = 'organizations';
    }

    renderList () {
        const $categoriesBlock =  $('.js-organizations-categories');

        $categoriesBlock.empty();

        const $categoriesList = $(`
            <select multiple name="categories[]">
                <option value="0" selected>Всі</option>
            </select>     
        `);

        this.categories.forEach((category, index) => {
            const $category = $(`
                <option value="${category.id}">${category.name}</option>
            `);

            $categoriesList.append($category);

        });

        $categoriesBlock.append($categoriesList);

        $categoriesBlock.dropdown({
            searchable: false,
            readOnly: false,
            choice: function () {
                const data = $('.js-organizations-filters-form').serializeObject();

                $categoriesList.trigger('change', data);
            }

        });

        $('html, body').on({'touchstart' : function(event) {
            if (!$(event.target).parents('.dropdown-main').length) {
                $categoriesBlock.removeClass('active');
            }
        }});

        $categoriesList.on('change', (e, data)=> {
            this.eventDispatcher.dispatch(`${this.entityName}.filter`, data);
        });

    }
}

module.exports = CategoriesList;
