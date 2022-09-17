export function createMarkupEventModal(arr) {
    return arr.reduce((acc, {
        name,
        info,
        dates: { start },
    }) => 
    acc + `<div class="card-modal">
                <button class="card-modal_close" data-modal-close>
                    <svg class="card-modal_close-svg" width="17" height="17">
                        <use href="./images/symbol.svg#icon-close"></use>
                    </svg>
                </button>

                <div class="card-modal_box-img">
                    <img class="card-modal_img-small" src="" alt="">
                </div>
                <div class="card-modal_box-info">
                    <img class="card-modal_img-original" src="" alt="">
                    <ul class="card-modal_list">
                        <li class="card-modal_info">
                            <h3 class="card-modal_title">INFO</h3>
                            <p>${info}</p>
                        </li>
                        <li class="card-modal_info">
                            <h3 class="card-modal_title">WHEN</h3>
                            <p>${start.localDate}</p>
                            <p>${start.localTime}</p>
                        </li>
                        <li class="card-modal_info">
                            <h3 class="card-modal_title">WHERE</h3>
                            <p></p>
                            <p></p>
                        </li>
                        <li class="card-modal_info">
                            <h3 class="card-modal_title">WHO</h3>
                            <p>${name}</p>
                        </li>
                        <li class="card-modal_info">
                            <h3 class="card-modal_title">PRICES</h3>
                            <p>
                                <span class="event-icon-ticket">
                                    <svg class="icon icon-ticket" width="24" height="16">
                                        <use href="./images/symbol.svg#icon-ticket"></use>
                                    </svg>
                                </span>
                                <span></span>
                            </p>
                            <button class="btn-buy-tickets" type="button">BUY TICKETS</button>
                            <p class="price-box-vip">
                                <span class="event-icon-ticket">
                                    <svg class="icon icon-ticket" width="24" height="16">
                                        <use href="./images/symbol.svg#icon-ticket"></use>
                                    </svg>
                                </span>
                                <span></span>
                            </p>
                            <button class="btn-buy-tickets btn-vip" type="button">BUY TICKETS</button>
                        </li>
                    </ul>
                </div>
                <button class="btn-more-info" type="button">More about this event</button>
            </div>`
    , "");
};

