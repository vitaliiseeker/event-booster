import './modules/eventsApi';
// import { refs } from './footer';
const refsModal = document.querySelector('[data-modal');

import createMarkupEventModal from './modules/markupEventModal';

export function openModal() {
  refsModal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);
  document.body.classList.toggle('no-scroll');
}

export function closeModal() {
  refsModal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);
  document.body.classList.toggle('no-scroll');
}

function isKeyPressed(e) {
  if (e.code === 'Escape') {
    refsModal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', isKeyPressed);
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