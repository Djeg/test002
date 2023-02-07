const btnAdd = document.querySelector('.plus')
const btnSub = document.querySelector('.minus')
const btnReset = document.querySelector('.reset')
const input = document.querySelector('.input')
const display = document.querySelector('.counter')

//Initialisation des variables
let compteur = 0

//Incrémenter le compteur quand le button + est appuyé
btnAdd.addEventListener('click', () =>{
    compteur += parseInt(input.value)
    display.innerText = compteur
})

//Décrementer le compteur quand le button - est appuyé
btnSub.addEventListener('click', () =>{
    compteur -= parseInt(input.value)
    if(compteur <= 0){
        compteur = 0
    }
    display.innerText = compteur
})

//Reset a 0 le compteur quand le button reset est appuyé
btnReset.addEventListener('click', () =>{
    compteur = 0
    display.innerText = compteur
})