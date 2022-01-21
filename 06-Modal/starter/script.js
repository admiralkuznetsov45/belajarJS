'use strict';

//Hidden ini class yg merujuk ke style di css untuk display none

//melakukan select query komponen HTML
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModel = document.querySelector('.close-modal')
const btnOpenModel = document.querySelectorAll('.show-modal')

//fungsi untuk membuka modal dengan cara hapus hidden pada class
const OpenModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

//fungsi untuk menutup modal dengan cara hapus hidden pada class
const CloseModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

//fungsi menutup modal dengan keyboard escape 
const CloseKeyboard = function (e){
    console.log(e.key)

    //apabila ditekan escape dan didalam modal ada hidden element
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        CloseModal()
    }
}
//menjalankan fungsi ketika buttonOpen
for (let i=0 ; i < btnOpenModel.length ; i++){

    //buka dengan click open
    btnOpenModel[i].addEventListener('click',OpenModal)

    //close modal dengan click escape
    btnCloseModel.addEventListener('click',CloseModal)

    //close modal dengan click bagian overlay nya
    overlay.addEventListener('click',CloseModal)
}

//deteksi keyboard escape dan close model
document.addEventListener('keydown', CloseKeyboard)