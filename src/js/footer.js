import { openModal, closeModal, isKeyPressed } from './modal.js';

export const refs = {
  openModalBtn: document.querySelector('[data-modalFoter-open]'),
  closeModalBtn: document.querySelector('[data-modalFoter-close]'),
  modal: document.querySelector('[data-modalFooter]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

// function isKeyPressed(evt) {
//   if (evt.code === 'Escape') {
//     closeModal();
//   }
// }

// function openModal() {
//   refs.modal.classList.remove('is-hidden');
//   document.addEventListener('keydown', isKeyPressed);
//   document.body.classList.toggle('scrollOff');
// }

// function closeModal() {
//   refs.modal.classList.add('is-hidden');
//   document.removeEventListener('keydown', isKeyPressed);
//   document.body.classList.toggle('scrollOff');
// }

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_btnMenu = target == refs.openModalBtn;
  const menu_is_active = refs.modal.classList.contains('is-hidden');
  const its_menu = target == refs.modal;

  if (!its_btnMenu && !menu_is_active && its_menu) {
    closeModal();
  }
});

// const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//   const body = document.body;
//   body.style.position = 'fixed';
//   body.style.top = `-${scrollY}`;
// };
// const closeDialog = () => {
//   const body = document.body;
//   const scrollY = body.style.top;
//   body.style.position = '';
//   body.style.top = '';
//   window.scrollTo(0, parseInt(scrollY || '0') * -1);
//   document.getElementById('dialog').classList.remove('show');
// }
// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });
