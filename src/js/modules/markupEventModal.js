import imageSvg from '../../images/symbol-defs.svg';

const refsModal = document.querySelector(".js-event_modal");

export function createMarkupEventModal(arr) {
    const renderModal = arr.reduce((acc, {
        name,
        info,
        images,
        dates: { start },
        priceRanges,
        url,
        _embedded: { venues },
    }) => {
        const urlGoogle = `https://www.google.com/search?q=${name}`;
        const strInfo = info ? info : "You can see more information about this event if you click on 'More about this event'";

        let strPriceList = "";

        if (!priceRanges) {
            strPriceList += `<p class="price-box}">
                <span class="event-icon-ticket">
                    <svg class="icon icon-ticket" width="24" height="16">
                        <use href="${imageSvg}#icon-ticket"></use>
                    </svg>
                </span>
                <span>- no info</span>
            </p>
            <a class="btn-buy-tickets" href="${url} target="_blank"">BUY TICKETS</a>`
        } else {
            priceRanges.forEach(elem => {
                let priceBox = "price-box";
                let btnVip = "";
                let nameType = "Standard";

                if (elem.type.toLowerCase() === "vip") {
                    nameType = "VIP";
                    priceBox += "-vip";
                    btnVip = "btn-vip";
                }

                strPriceList += `<p class="${priceBox}">
                    <span class="event-icon-ticket">
                        <svg class="icon icon-ticket" width="24" height="16">
                            <use href="${imageSvg}#icon-ticket"></use>
                        </svg>
                    </span>
                    <span>${nameType} ${elem.min}-${elem.max} ${elem.currency}</span>
                </p>
                <a class="btn-buy-tickets ${btnVip}" href="${url} target="_blank"">BUY TICKETS</a>`
            });
        }
        return acc + `<div class="card-modal is-hidden">
            <button class="card-modal_close" data-modal-close>
                <svg class="card-modal_close-svg" width="17" height="17">
                    <use href="${imageSvg}#icon-close"></use>
                </svg>
            </button>

            <div class="card-modal_box-img">
                <img class="card-modal_img-small" src="${images[3].url}" alt="">
            </div>
            <div class="card-modal_box-info">
                <img class="card-modal_img-original" src="${images[0].url}" alt="">
                <ul class="card-modal_list">
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">INFO</h3>
                        <p>${strInfo}</p>
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">WHEN</h3>
                        <p>${start.localDate}</p>
                        <p>${start.localTime.slice(0, -3)} (${venues[0].timezone})</p>
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">WHERE</h3>
                        <p>${venues[0].country.name}</p>
                        <p>${venues[0].name}</p>
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">WHO</h3>
                        <p>${name}</p>
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">PRICES</h3>
                        ${strPriceList}
                    </li>
                </ul>
            </div>
            <a class="btn-more-info" href="${urlGoogle}" target="_blank">More about this event</a> 
        </div>`
    }, "");
    refsModal.innerHTML = renderModal;
};

