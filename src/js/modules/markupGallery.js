import { EventsApi } from './eventsApi';
export const gallery = document.querySelector('.gallery');
import imgPlace from '../../images/symbol-defs.svg';
import imgBg from '../../images/symbol-defs.svg';

const refGallery = document.querySelector('.gallery');
export const refPagination = document.querySelector('.pagination');

export function renderEvents(data) {
  const mark = data.reduce((acc, elem) => {
    let place = elem._embedded.venues[0].name;

    return (
      acc +
      `
                      <li class="card" data-id="${elem.id}">
                      <div class="card__decore">
                      </div>
                      <div class = "card__img-wrap">

                      ${elem.images
        ? `<img class="card__img" src="${elem.images[1].url}" alt="" />`
        : `<svg class = "card-img__svg">
                                <use href='${imgBg}#icon-unload'></use>
                            </svg>`
      }  
                      </div>
                      <p class="card__name">${elem.name}</p>
                      <p class="card__date">${elem.dates.start.localDate}</p>
                      <p class="card__place">
                        ${place
        ? `<svg class = 'icon-place'>
                                <use   width= 10px height = 10px
                                href='${imgPlace}#icon-location'></use>
                                </svg>` + place
        : ''
      }
                      </p>
                      </li> 
          `
    );
  }, '');

  refGallery.innerHTML = mark;
  renderPagination();
}

export function renderPagination() {
  const currentPage = EventsApi.page + 1;
  const totalPages = EventsApi.totalPages;
  let pagination = '';

  if (totalPages < 10) {
    for (let i = 1; i <= totalPages; i += 1) {
      pagination += `<li class="pagination__item">
  <button class="pagination__btn ${i === currentPage ? 'current' : ''
        }" type="button">${i}</button></li>`;
    }
  } else {
    if (currentPage < 6) {
      for (let i = 1; i < 8; i += 1) {
        pagination += `<li class="pagination__item">
          <button class="pagination__btn
            ${i === currentPage ? 'current' : ''}" type="button">${i}</button>
        </li>`;
      }
      pagination += `<li class="pagination__item">...</li>
        <li class="pagination__item">
          <button class="pagination__btn" type="button">${totalPages}</button>
        </li>`;
    } else {
      pagination = `<li class="pagination__item">
                  <button class="pagination__btn" type="button">1
                  </button>
                </li>
                <li class="pagination__item">...
                </li>`;
      if (totalPages - currentPage > 3) {
        for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
          pagination += `<li class="pagination__item">
                            <button class="pagination__btn
                             ${i === currentPage ? 'current' : ''
            }" type="button">${i}
                             </button>
                        </li>`;
        }
        pagination += `<li class="pagination__item">...
                    </li>
                    <li class="pagination__item">
                    <button class="pagination__btn" type="button">${totalPages}</button>
                    </li>`;
      } else {
        for (let i = currentPage - 2; i <= totalPages; i += 1) {
          pagination += `<li class="pagination__item">
                            <button class="pagination__btn
                             ${i === currentPage ? 'current' : ''
            }" type="button">${i}
                             </button>
                        </li>`;
        }
      }
    }
  }
  refPagination.innerHTML = pagination;
}
