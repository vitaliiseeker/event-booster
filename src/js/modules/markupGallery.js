import { EventsApi } from './eventsApi';
export const gallery = document.querySelector('.gallery');

const refGallery = document.querySelector('.gallery');
const refPagination = document.querySelector('.pagination');

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
                      <img class="card__img" src="${
                        elem.images
                          ? '../images/card-svg/unload.svg'
                          : elem.images[1].url
                      }" alt="" />
                      </div>
                      <div class = "card-desc__wrapper">
                      <p class="card__name">${elem.name}</p>
                      <p class="card__date">${elem.dates.start.localDate}</p>
                      <p class="card__place">

                        ${
                          place
                            ? "<span class='card__icon'></span>" + place
                            : ''
                        }
                      </p>
                      </div>
                      </li>
          
          `
    );
  }, '');

  refGallery.innerHTML = mark;
  renderPagination();
}

function renderPagination() {
  const currentPage = EventsApi.page + 1;
  const totalPages = EventsApi.totalPages;
  let pagination = '';

  if (totalPages < 10) {
    for (let i = 1; i <= totalPages; i += 1) {
      pagination += `<li class="pagination__item">
  <button class="pagination__btn ${
    i === currentPage ? 'current' : ''
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
                             ${
                               i === currentPage ? 'current' : ''
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
                             ${
                               i === currentPage ? 'current' : ''
                             }" type="button">${i}
                             </button>
                        </li>`;
        }
      }
    }
  }
  refPagination.innerHTML = pagination;
}
