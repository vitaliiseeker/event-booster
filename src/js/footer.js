// import { openModal, closeModal, isKeyPressed } from './modal.js';

const refs = {
  openModalBtn: document.querySelector('[data-modal-footer-open]'),
  closeModalBtn: document.querySelector('[data-modal-footer-close]'),
  modal: document.querySelector('[data-modal-footer]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', isKeyPressed);

  document.body.classList.add('no-scroll');
  refs.modal.classList.add('animation');
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', isKeyPressed);

  document.body.classList.remove('no-scroll');
  refs.modal.classList.remove('animation');
}

function isKeyPressed(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
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

