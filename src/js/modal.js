import './modules/eventsApi';
import { refs } from './footer';
// импорт на функцию создания разметки модалки
// import { createMarkupEventModal } from './markupEventModal';

// export function openCloseModal() {
//   refs.modal.classList.toggle('is-hidden');
// }

export function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);
  document.body.classList.toggle('scrollOff');
}

export function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);
  document.body.classList.toggle('scrollOff');
}

export function isKeyPressed(evt) {
  if (evt.code === 'Escape') {
    refs.modal.classList.toggle('is-hidden');
    // document.removeEventListener('keydown', isKeyPressed);
  }
}
