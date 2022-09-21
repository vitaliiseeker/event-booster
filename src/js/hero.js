import { EventsApi } from './modules/eventsApi';
import { renderEvents } from './modules/markupGallery';
import { createMarkupEventModal } from './modules/markupEventModal';

const paginationPage = document.querySelector('.pagination');
const gallery = document.querySelector('.gallery');

paginationPage.addEventListener('click', e => {
  EventsApi.fetchEvents(e.target.outerText - 1).then(r => renderEvents(r));

  document
    .querySelector('body')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

gallery.addEventListener('click', e => {

  if (!e.target.closest('li')) return;

  const id = e.target.closest('li').dataset.id;
  EventsApi.fetchEventsById(id).then(r => createMarkupEventModal(r));

});

