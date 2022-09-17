// import { openCloseModal, isKeyPressed } from './modal.js';

const refs = {
  openModalBtn: document.querySelector('[data-modalFoter-open]'),
  closeModalBtn: document.querySelector('[data-modalFoter-close]'),
  modal: document.querySelector('[data-modalFooter]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

function isKeyPressed(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}

function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);
}

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_btnMenu = target == refs.openModalBtn;
  const menu_is_active = refs.modal.classList.contains('is-hidden');
  const its_menu = target == refs.modal;

  if (!its_btnMenu && !menu_is_active && its_menu) {
    closeModal();
  }
});
