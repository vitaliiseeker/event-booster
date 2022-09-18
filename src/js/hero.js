import { EventsApi } from './modules/eventsApi';
// import { openCloseModal } from './modal';
import { isKeyPressed } from './modal';
import { refs } from './footer';
const paginationPage = document.querySelector('.pagination');
const gallery = document.querySelector('.gallery');
const main = document.querySelector('main');
// const card = document.querySelector('.gallery');
const card = document.querySelector('.gallery');
const activeBtn = document.getElementsByClassName('active');
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
// EventsApi.page = 3;
// console.log(EventsApi.page);

paginationPage.addEventListener('click', e => {
  EventsApi.fetchEvents(e.target.outerText - 1).then(events =>
    renderEvents(events)
  );
  switchBtn(e);
  main.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

function switchBtn(e) {
  if (e.target.tagName === 'BUTTON') {
    activeBtn[0].classList.remove('active');
    e.target.classList.add('active');
  }
}
card.addEventListener('click', e => {
  console.log('ok');
  openCloseModal();
});

export function openCloseModal() {
  refs.modal.classList.toggle('is-hidden');
}
