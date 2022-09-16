const refs = {
  openModalBtn: document.querySelector('[data-modal-open1]'),
  closeModalBtn: document.querySelector('[data-modal-close1]'),
  modal: document.querySelector('[data-modal1]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', openModal);

function openModal() {
  refs.modal.classList.toggle('is-hidden');
}

// document.body.addEventListener(
//   'keyup',
//   function (e) {
//     var key = e.keyCode;

//     if (key == 27) {
//       refs.modal.classList.toggle('is-hidden');
//     }

//     // ____________________________________________

//     const click = e.composedPath().includes(modal);
//     if (!click) {
//       refs.modal.classList.toggle('is-hidden');
//     }
//   },
//   false
// );

// const box = document.querySelector('.box');
// document.addEventListener('click', e => {
//   const click = e.composedPath().includes(box);
//   if (!click) {
//     box.style.display = 'none';
//   }
// });

document.addEventListener('keydown', isKeyPressed);

function isKeyPressed(evt) {
  if (evt.code === 'Escape') {
    refs.modal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', isKeyPressed);
  }
}
