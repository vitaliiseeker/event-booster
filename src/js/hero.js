import { EventsApi } from './modules/eventsApi';
import { renderEvents } from './modules/markupGallery';
import { openModal, closeModal } from './modal';
import { createMarkupEventModal } from './modules/markupEventModal';

const paginationPage = document.querySelector('.pagination');
const main = document.querySelector('main');
const gallery = document.querySelector('.gallery');
const activeBtn = document.getElementsByClassName('current');

paginationPage.addEventListener('click', e => {
  EventsApi.page = e.target.outerText - 1;
  EventsApi.fetchEvents(EventsApi.page).then(r => renderEvents(r));

  document
    .querySelector('body')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

gallery.addEventListener('click', e => {
  const id = e.target.closest('li').dataset.id;

  // if (e.target.tagName !== "DIV") {
  //     return;
  // }

  EventsApi.fetchEventsById(id).then(r => createMarkupEventModal(r)).then(openModal());
});

