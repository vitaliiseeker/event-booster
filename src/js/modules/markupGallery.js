import { EventsApi } from './eventsApi';
export const gallery = document.querySelector('.gallery');

export function renderEvents(data) {
  const mark = data.reduce((acc, elem) => {
    return (
      acc +
      `
                 <li class="card">
                 <div class="card__decore"></div>
          
                 <img class="card__img" src="${elem.images[1].url}" alt="" />
                 <div class = "card-disc__wrapper">
                 <p class="card__name">${elem.name}</p>
                 <p class="card__date">${elem.dates.start.localDate}</p>
                 <p class="card__place">
                   <svg class="card__icon" width="10" height="10">
                     <use href="./images/card-svg/place.svg"></use>
                   </svg>
                   ${elem._embedded.venues[0].name}
                 </p>
                 </div>
                 </li>
          
          `
    );
  }, '');

  gallery.innerHTML = mark;
}
