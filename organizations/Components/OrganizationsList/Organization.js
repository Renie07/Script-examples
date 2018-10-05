class Organization {
    constructor (organization) {
        this.organization = organization;
    }

    render () {
        const phones = this.organization.phones;
        const websites = this.organization.websites;
        const emails = this.organization.emails;
        const addresses = this.organization.addresses;

        const $block = $(`
            <div class="organization-item flex">
                <div class="img-block flex-center">
                    <img src="${this.organization.image}" />
                </div>
                <div class="info">
                    <h6>${this.organization.name}</h6>
                    <div class="feedback">
                        ${
                            Object.keys(phones).map((key) => {
                                const tel = phones[key].replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
                                
                                return '<a href="tel:'+phones[key]+'">'+tel+'</a>';
                            }).join(' ')
                        }
                        ${
                            Object.keys(emails).map((key) => {
                                return '<a href="mailto:' +emails[key] + '">' + emails[key] + '</a>';
                            }).join(' ')
                        }
                        <span class="website">
                            ${
                                Object.keys(websites).map((key) => {
                                    const website = websites[key].replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
                    
                                    return '<a href="' + websites[key] + '" target="_blank">' + website + '</a>';
                                }).join(' ')
                            }
                        </span>
                    </div>
                    <div class="address">
                        ${
                            Object.keys(addresses).map((key) => {
                                return '<p>'+ addresses[key] +'</p>'
                            }).join(' ')
                        }
                    </div>
                </div>
            </div>
        `);

        $block.click(() => {
            if (!!isPublic) {
                $(this).simplePopup({
                    type: "html",
                    width: 'auto',
                    height: 'auto',
                    htmlSelector: ".js-public-popup-register",
                    fadeInDuration: 0,
                    fadeOutDuration: 0,
                });

                return;
            }

            window.location.href = '/organization/' + this.organization.urlSlug;
        });

        return $block;
    }
}

module.exports = Organization;
