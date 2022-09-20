// const refs = {
//   openModalBtn: document.querySelector('[data-modal-footer-open]'),
//   closeModalBtn: document.querySelector('[data-modal-footer-close]'),
//   modal: document.querySelector('[data-modal-footer]'),

//   // body: document.body,
//   // fixBlocks: document.querySelectorAll('.fix-block'),
// };

// refs.openModalBtn.addEventListener('click', openModal);
// refs.closeModalBtn.addEventListener('click', closeModal);

// function openModal() {
//   refs.modal.classList.remove('is-hidden');
//   refs.modal.classList.add('animation');

//   document.addEventListener('keydown', isKeyPressed);
//   document.body.classList.add('no-scroll');

//   // disableScroll();
// }

// function closeModal() {
//   refs.modal.classList.add('is-hidden');
//   refs.modal.classList.remove('animation');

//   document.removeEventListener('keydown', isKeyPressed);
//   document.body.classList.remove('no-scroll');

//   // enableScroll();
// }

// function isKeyPressed(evt) {
//   if (evt.code === 'Escape') {
//     closeModal();
//   }
// }

// document.addEventListener('click', function (e) {
//   const target = e.target;
//   const its_btnMenu = target == refs.openModalBtn;
//   const menu_is_active = refs.modal.classList.contains('is-hidden');
//   const its_menu = target == refs.modal;

//   if (!its_btnMenu && !menu_is_active && its_menu) {
//     closeModal();
//   }
// });

// let disableScroll = function () {
//   let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
//   let pagePosition = window.scrollY;
//   refs.fixBlocks.forEach(el => {
//     el.style.paddingRight = paddingOffset;
//   });
//   refs.body.style.paddingRight = paddingOffset;
//   refs.body.classList.add('disable-scroll');
//   refs.body.dataset.position = pagePosition;
//   refs.body.style.top = -pagePosition + 'px';
// };

// let enableScroll = function () {
//   let pagePosition = parseInt(document.body.dataset.position, 10);
//   refs.body.style.top = 'auto';
//   refs.body.classList.remove('disable-scroll');
//   refs.fixBlocks.forEach(el => {
//     el.style.paddingRight = '0px';
//   });
//   refs.body.style.paddingRight = '0px';
//   window.scroll({ top: pagePosition, left: 0 });
//   refs.body.removeAttribute('data-position');
// };
