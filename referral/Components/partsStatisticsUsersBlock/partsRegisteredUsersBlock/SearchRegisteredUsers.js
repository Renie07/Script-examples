let LabelsAnimation = requireV('../../../../../../../../js/public/lib/LabelsAnimation');

class SearchRegisteredUsers {
    constructor (eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
    }

    renderSearch () {
        const self = this;
        const $block = $(`
            <div class="flex-baseline">
                <div class="control-wrap">
                    <label class="form-label addon-label" for="search">Введіть дані пошуку</label>
                    <i class="form-control-addon search"></i>
                    <input type="text" class="form-input js-search-in-table" id="search" />
                </div>
                <!--<div class="search-submit-block">-->
                    <!--<input class="btn btn-default" type="submit" value="Пoшук">-->
                <!--</div>-->
            </div>            
        `);

        const labelsAnimation = new LabelsAnimation();
        const $searchInTableInput = $block.find('.js-search-in-table');

        labelsAnimation.initLabelsAnimation();


        $searchInTableInput.keyup(function(){
            const searchString = $(this).val();
            self.eventDispatcher.dispatch('filter.registered.user', searchString);
        });

        return $block;
    }
}

module.exports = SearchRegisteredUsers;
