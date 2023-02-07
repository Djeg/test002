import { operation } from "./increment"

const btnAdd = document.querySelector('.plus')
const btnSub = document.querySelector('.minus')
const btnReset = document.querySelector('.reset')


//Incrémenter le compteur quand le button + est appuyé
btnAdd.addEventListener('click', () =>{
    operation(true, false, false)
})

//Décrementer le compteur quand le button - est appuyé
btnSub.addEventListener('click', () =>{
    operation(false, true, false)
})

//Reset a 0 le compteur quand le button reset est appuyé
btnReset.addEventListener('click', () =>{
    operation(false, false, true)
})