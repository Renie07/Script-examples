let Course = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/Course');
let Material = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/Material');
let Survey = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/Survey');
let Conference = requireV('../../../../../../js/public/organizations/Components/OrganizationPage/News/Conference');

class NewsList {
    constructor (data) {
        this.news = data;
        this.lastIndex = 6;
        this.needToRender = false;
        this.waypointHandler = this.waypointHandler.bind(this);
        this.newsMap = {
            "course": (data) => new Course(data),
            "material":(data) => new Material(data),
            "survey": (data) => new Survey(data),
            "conference": (data) => new Conference(data),
        };
    }

    sliceList(list) {
        return list.slice(0, this.lastIndex);
    }

    render () {
        const self = this;

        $('.js-news-list').empty();

        const slicedNews = this.sliceList(this.news);

        slicedNews.forEach((item, index) => {
            const $itemBlock = this.newsMap[item.type](item.data).render();

            $('.js-news-list').append($itemBlock);

            if(this.lastIndex <= (this.news.length - 1) ) {
                if (index === slicedNews.length - 4) {
                    self.needToRender = true;
                    var waypoint = new Waypoint({
                        element: $itemBlock[0],
                        handler: this.waypointHandler(self),
                        offset: 'bottom-in-view'
                    })
                }
            }
        });

        Waypoint.refreshAll();
    }

    waypointHandler (context) {
        return function () {
            if (!context.needToRender) {
                return;
            }
            if (context.lastIndex >= context.news.length) {
                context.needToRender = false;
                this.destroy();
            } else {
                context.lastIndex += 6;
                this.destroy();
                context.render()
            }
        }
    }
}

module.exports = NewsList;
