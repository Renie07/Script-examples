class Administration {
    constructor (data) {
        this.data = data;
    }

    render () {
        const $block = $(`
            <div class="item flex">
                <div class="administrator-photo">
                    <img src="${this.data.image}" class="img-fill" alt="" />
                </div>
                <div class="administrator-content">
                    <p class="post">${this.data.post}</p>
                    <p class="name">${this.data.name}</p>
                    <p>${this.data.description ? this.data.description : ''}</p>
                </div>
            </div>
        `)

        return $block;
    }
}

module.exports = Administration;
