import './modules/eventsApi';
// импорт на функцию создания разметки модалки
// import { createMarkupEventModal } from './markupEventModal';


export function openCloseModal() {
  refs.modal.classList.toggle('is-hidden');
}

export function isKeyPressed(evt) {
  if (evt.code === 'Escape') {
    refs.modal.classList.toggle('is-hidden');
    // document.removeEventListener('keydown', isKeyPressed);
  }
}
