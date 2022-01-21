'use strict';

//memilih elemen 
const score0El = document.querySelector('#score--0');
const score1El = document.queryElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

//Logika untuk mengocok dadu
btnRoll.addEventListener('click',function(){

    //1. generator untuk dapet angka secara acak
    const dice = Math.trunc(Math.random()*6) +1
    console.log(dice)
    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

})