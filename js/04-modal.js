const modalButton = document.querySelectorAll('[data-modal-button]')
const modalCLosebuttons = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')

modalButton.forEach((item) => {
   item.addEventListener('click', function () {

      const modalId = this.dataset.modalButton;
      const modal = document.querySelector('#' + modalId);

      modal.classList.remove('hidden');

      modal.querySelector('.modal-window').addEventListener('click', function (e) {
         e.stopPropagation();
      })
   })
})

modalCLosebuttons.forEach((item) => {
   item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.add('hidden')
   })
})


allModals.forEach((item) => {
   item.addEventListener('click', function () {

      this.classList.add('hidden');
   })
})

