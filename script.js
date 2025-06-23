'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const closeModel = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const showModel = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModel);

  btnCloseModal.addEventListener('click', closeModel);
  overlay.addEventListener('click', closeModel);
}
