import { operation } from "./increment"

const btnAdd = document.querySelector('.plus')
const btnSub = document.querySelector('.minus')
const btnReset = document.querySelector('.reset')
const input = document.querySelector('.input')


//Incrémenter le compteur quand le button + est appuyé
btnAdd.addEventListener('click', () =>{
    operation(true, false, false, input.value)
})

//Décrementer le compteur quand le button - est appuyé
btnSub.addEventListener('click', () =>{
    operation(false, true, false, input.value)
})

//Reset a 0 le compteur quand le button reset est appuyé
btnReset.addEventListener('click', () =>{
    operation(false, false, true, input.value)
})