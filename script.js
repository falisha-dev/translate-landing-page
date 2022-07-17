'use strict';

const openModal = document.querySelector('.btn--show-modal') ;
const modalShow = document.querySelector('.modal');
const closeModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');

function openClick(){
    modalShow.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeBtn(){
    modalShow.classList.add('hidden');
    overlay.classList.add('hidden');
};
// for (let i = 0; i < openModal.length; i++)
 openModal.addEventListener('click', openClick);

closeModal.addEventListener('click', closeBtn);
overlay.addEventListener('click', closeBtn);