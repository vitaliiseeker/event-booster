import { EventsApi } from './modules/eventsApi';
import { renderEvents } from './modules/markupGallery';
import { isKeyPressed } from './modal';
import { createMarkupEventModal } from './modules/markupEventModal';
const paginationPage = document.querySelector('.pagination');

const main = document.querySelector('main');
const card = document.querySelector('.gallery');
const activeBtn = document.getElementsByClassName('active');

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
  // openCloseModal();
  // createMarkupEventModal(arr);
});
