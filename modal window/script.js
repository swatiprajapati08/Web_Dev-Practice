'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnOpenModel);
const openModal = function () {
    console.log('button clicked');
    //remove the class 'dont use dot' , can pass multiple class
    modal.classList.remove('hidden');   //<== same thing ==> modal.style.display = '.block';
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openModal);
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) //check whether is contain hidden
        closeModal();
});