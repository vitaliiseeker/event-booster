import { EventsApi } from './eventsApi';
const gallery = document.querySelector('.gallery');
import iconPlace from '../../images/symbol-defs.svg#icon-place';
export function renderEvents(data) {
  const mark = data.reduce((acc, elem) => {
    return (
      acc +
      `
                      <li class="card" data-id="${elem.id}">
                      <div class="card__decore">
                      </div>
                      <div class = "card__img-wrap">
                      <img class="card__img" src="${elem.images[1].url}" alt="" />
                      </div>
                      <div class = "card-desc__wrapper">
                      <p class="card__name">${elem.name}</p>
                      <p class="card__date">${elem.dates.start.localDate}</p>
                      <p class="card__place">
                      <span class = "card__icon"></span>
                        ${elem._embedded.venues[0].name}
                      </p>
                      </div>
                      </li>
          
          `
    );
  }, '');

  gallery.innerHTML = mark;
}

{
  /* <li class="pagination__item">
  <button class="pagination__btn active" type="button">1</button>
</li> */
}

/*  */
