import imageSvg from '../../images/symbol-defs.svg';
import { addEventImages } from './addEventImages';
import arrow from '../../images/sprite.svg'
import { openModal, closeModal } from '../modal';


const refsModal = document.querySelector(".js-event_modal");
// const refCloseModal = document.querySelector('[data-modal-close]');

let refCloseModal = null;

function createBtnMore() {
    const refsBtnMore = document.querySelector('.btn-arrow');
    const refsTextDesc = document.querySelector('.card-modal_description');

    if (refsBtnMore) {
        refsBtnMore.addEventListener('click', e => {
            const maxHeight = "90px";
            if (
                refsTextDesc.style.maxHeight === maxHeight ||
                refsTextDesc.style.maxHeight === ''
            ) {
                refsTextDesc.style.maxHeight = 'initial';
                refsBtnMore.style.transform = 'rotate(180deg)';
            } else {
                refsTextDesc.style.maxHeight = maxHeight;
                refsBtnMore.style.transform = 'rotate(0deg)';
            }
        });
    }
}

export async function createMarkupEventModal(arr) {
    const renderModal = await arr.reduce((acc, {
        name,
        info,
        images,
        url,
        dates: { start },
        priceRanges,
        _embedded: { venues },
    }
    ) => {
        const urlGoogle = `https://www.google.com/search?q=${name}`;
        const strInfo = info
            ? info
            : "You can see more information about this event if you click on 'More about this event'";
        const btnMore =
            strInfo.length <= 170
                ? ''
                : `<button class="btn-arrow" type="button">
                <svg class="icon icon-arrow" width="15" height="10">
                    <use href="${arrow}#polygon"></use>
                </svg>
            </button>`;
        // const test = `${imageSvg}#icon-unload`;
        let strPriceList = '';

        if (!priceRanges) {
            strPriceList += `<p class="price-box}">
                <span class="event-icon-ticket">
                    <svg class="icon icon-ticket" width="24" height="16">
                        <use href="${imageSvg}#icon-ticket"></use>
                    </svg>
                </span>
                <span>- no info</span>
            </p>
            <a class="btn-buy-tickets" href="${url}" target="_blank">BUY TICKETS</a>`;
        } else {
            priceRanges.forEach(elem => {
                let priceBox = 'price-box';
                let btnVip = '';
                let nameType = 'Standard';

                if (elem.type.toLowerCase() === 'vip') {
                    nameType = 'VIP';
                    priceBox += '-vip';
                    btnVip = 'btn-vip';
                }

                strPriceList += `<p class="${priceBox}">
                    <span class="event-icon-ticket">
                        <svg class="icon icon-ticket" width="24" height="16">
                            <use href="${imageSvg}#icon-ticket"></use>
                        </svg>
                    </span>
                    <span>${nameType} ${elem.min}-${elem.max} ${elem.currency}</span>
                </p>
                <a class="btn-buy-tickets ${btnVip}" href="${url}" target="_blank">BUY TICKETS</a>`;
            });
        }
        images = null;
        return acc +
            `<div class="card-modal is-hidden">
            <button class="card-modal_close" data-modal-close>
                <svg class="card-modal_close-svg" width="17" height="17">
                    <use href="${imageSvg}#icon-close-modal"></use>
                </svg>
            </button>
            <div class="card-modal_box-img">
                ${images && !images.length
            ? `<img class="card-modal_img-small" src="${addEventImages(images).url
            }" alt="">`
            : `<svg class="card-modal_test-svg" width="40" height="40">
                    <use href="${imageSvg}#icon-unload"></use>
                </svg>`}
            </div>
            <div class="card-modal_box-info">
                ${images && !images.length
            ? `<img class="card-modal_img-original" src="${addEventImages(images).url}" alt="">`
            : `<svg class="card-modal_style-svg" width="420" height="600">
                    <use href="${imageSvg}#icon-unload"></use>
                </svg>`}         
                <ul class="card-modal_list">
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">INFO</h3>
                        <p class="card-modal_description">${strInfo}</p>              
                        ${btnMore}
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">WHEN</h3>
                        <p>${start.localDate}</p>
                        <p>${start.localTime
                        ? start.localTime.slice(0, -3)
                        : ""} (${venues[0].timezone})</p>
                    </li>
                    <li class="card-modal_info">
                        <h3 class="card-modal_title">WHERE</h3>
                        <a class="card-modal_maps" href="https://www.google.com/maps/@${venues[0].location.latitude},${venues[0].location.longitude},14z" target="_blank">
                        <svg class="card-modal_location-svg" width="17" height="17">
                            <use href="${imageSvg}#icon-location"></use>
                        </svg>
                        <p class="card-modal_location">${venues[0].country.name}</p>
                        <p>${venues[0].name
                        ? venues[0].name
                        : ""}</p>
                        </a> 
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

    refsModal.innerHTML = await renderModal;
    createBtnMore();
    openModal();

    refCloseModal = document.querySelector('[data-modal-close]');
    refCloseModal.addEventListener('click', () => closeModal());
}

