// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', openModal);
//   refs.closeModalBtn.addEventListener('click', closeModal);

//   function openModal() {
//     refs.modal.classList.add('is-open');
//     document.body.classList.add('no-scroll');
//     document.documentElement.classList.add('no-scroll');
//   }

//   function closeModal() {
//     refs.modal.classList.remove('is-open');
//     document.body.classList.remove('no-scroll');
//     document.documentElement.classList.remove('no-scroll');
//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle('is-open');
    if (isOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
