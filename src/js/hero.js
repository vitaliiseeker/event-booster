import { EventsApi } from './modules/eventsApi';
import { renderGallery as renderEvents } from './modules/markupGallery';
// import { openModal, closeModal, isKeyPressed } from './modal';
import { openModal } from './modal';
import { createMarkupEventModal } from './modules/markupEventModal';

const paginationPage = document.querySelector('.pagination');
const main = document.querySelector('main');
const gallery = document.querySelector('.gallery');
const activeBtn = document.getElementsByClassName('active');

paginationPage.addEventListener('click', e => {
  EventsApi.page = e.target.outerText - 1;
  EventsApi.fetchEvents(EventsApi.page).then(r => renderEvents(r));
  selectPage(e);
  document
    .querySelector('body')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

function selectPage(e) {
  if (e.target.tagName === 'BUTTON') {
    console.log(activeBtn);
    activeBtn[0].classList.remove('active');
    e.target.classList.add('active');
  }
}

gallery.addEventListener('click', e => {
  const id = e.target.closest('li').dataset.id;

  // if (e.target.tagName !== "DIV") {
  //     return;
  // }

  const data = EventsApi.fetchEventsById(id).then(r => createMarkupEventModal(r));
  openModal();
});

// function openModal() {
//   refs.modal.classList.remove('is-hidden');
//   document.addEventListener('keydown', isKeyPressed);
//   document.body.classList.toggle('no-scroll');
// }

// function closeModal() {
//   refs.modal.classList.add('is-hidden');
//   document.removeEventListener('keydown', isKeyPressed);
//   document.body.classList.toggle('no-scroll');
// }

// function isKeyPressed(e) {
//   if (e.code === 'Escape') {
//     refs.modal.classList.toggle('is-hidden');
//     document.removeEventListener('keydown', isKeyPressed);
//   }
// }



