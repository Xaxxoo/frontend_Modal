// 'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });




const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


for (i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
       
    })
}

close.addEventListener('click', function () { 
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
})


document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape') {
        modal.classList.add('hidden'); 
        overlay.classList.add('hidden');
    }
})

document.addEventListener('click', function (e) {
   
    if (e.target.classList.value === 'overlay') {
      
        modal.classList.add('hidden'); 
        overlay.classList.add('hidden');

    }
})

