export function createMarkupEventModal(arr) {
    return arr.reduce((acc, {
        name,
        info,
        images,
        dates: { start, timezone }, 
        priceRanges,
        url,
        _embedded: { venues },
    }) => {
        const strInfo = info ? info : "text description";

        let strPriceList = ""; 
        priceRanges.forEach(elem => {
            let priceBox = "price-box";
            let btnVip = "";
            let nameType = "Standard";
            
            if (elem.type.toLowerCase() === "vip") {
                nameType = "VIP";
                priceBox += "-vip";
                btnVip = "btn-vip";
            }

            strPriceList += `<p class="price-box${priceBox}">
                <span class="event-icon-ticket">
                    <svg class="icon icon-ticket" width="24" height="16">
                        <use href="./images/symbol.svg#icon-ticket"></use>
                    </svg>
                </span>
                <span>${nameType} ${elem.min}-${elem.max} ${elem.currency}</span>
            </p>
            <a class="btn-buy-tickets ${btnVip}" href="${url}">BUY TICKETS</a>`
        });

        return acc + `<div class="card-modal">
            <button class="card-modal_close" data-modal-close>
                <svg class="card-modal_close-svg" width="17" height="17">
                    <use href="./images/symbol.svg#icon-close"></use>
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
                        <p>${start.localTime.slice(0, -3)} (${timezone})</p>
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
            <a class="btn-more-info" href="">More about this event</a>        
        </div>`
    }, "");
};

