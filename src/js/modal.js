import './modules/eventsApi';
// import { refs } from './footer';
const refModal = document.querySelector('[data-modal]');
// const refCloseModal = document.querySelector('[data-modal-close]');
// import createMarkupEventModal from './modules/markupEventModal';

export function openModal() {
  refModal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);
  document.body.classList.add('no-scroll');
}

export function closeModal() {
  refModal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);
  document.body.classList.remove('no-scroll');
}

function isKeyPressed(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// document.addEventListener('click', function (e) {
//   const target = e.target;
//   const its_btnMenu = target == refs.openModalBtn;
//   const menu_is_active = refs.modal.classList.contains('is-hidden');
//   const its_menu = target == refs.modal;

//   if (!its_btnMenu && !menu_is_active && its_menu) {
//     closeModal();
//   }
// });