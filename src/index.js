import { operation } from "./increment"

const btnAdd = document.querySelector('.plus')
const btnSub = document.querySelector('.minus')
const btnReset = document.querySelector('.reset')

//Initialisation des variables
let increment = false
let reset = false

//Incrémenter le compteur quand le button + est appuyé
btnAdd.addEventListener('click', () => {
    increment = true
    operation(increment)
})

//Décrementer le compteur quand le button - est appuyé
btnSub.addEventListener('click', () => {
    increment = false
    operation(increment)
})

//Reset a 0 le compteur quand le button reset est appuyé
btnReset.addEventListener('click', () => {
    reset = true
    operation(increment, reset)
})