import './modules/eventsApi';
// import { refs } from './footer';
const refModal = document.querySelector('[data-modal]');
const refCloseModal = document.querySelector('[data-modal-close]');
import createMarkupEventModal from './modules/markupEventModal';

export function openModal() {
  refModal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);
  document.body.classList.add('no-scroll');

  refModal.classList.add('animation');
}

export function closeModal() {
  refModal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);
  document.body.classList.remove('no-scroll');

  refModal.classList.remove('animation');
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

const refs = {
  openModalBtn: document.querySelector('[data-modal-footer-open]'),
  closeModalBtn: document.querySelector('[data-modal-footer-close]'),
  modal: document.querySelector('[data-modal-footer]'),
};

refs.openModalBtn.addEventListener('click', openModalFooter);
refs.closeModalBtn.addEventListener('click', closeModalFooter);

function openModalFooter() {
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('animationFooter');

  document.addEventListener('keydown', isKeyPressedFooter);
  document.body.classList.add('no-scroll');
}

function closeModalFooter() {
  refs.modal.classList.add('is-hidden');
  refs.modal.classList.remove('animationFooter');

  document.removeEventListener('keydown', isKeyPressedFooter);
  document.body.classList.remove('no-scroll');
}

function isKeyPressedFooter(evt) {
  if (evt.code === 'Escape') {
    closeModalFooter();
  }
}

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_btnMenu = target == refs.openModalBtn;
  const its_refCloseModal = target == refCloseModal;
  const menuFoter_is_active = refs.modal.classList.contains('is-hidden');
  const menu_is_active = refModal.classList.contains('is-hidden');
  const its_menuFooter = target == refs.modal;
  const its_menu = target == refModal;

  if (!its_btnMenu && !menuFoter_is_active && its_menuFooter) {
    closeModalFooter();
  }

  if (!its_refCloseModal && !menu_is_active && its_menu) {
    closeModal();
  }
});
