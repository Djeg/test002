//-----------------------------------------------
//  const and var declaration
//-----------------------------------------------

const plus = document.querySelector('.plus')
const moin = document.querySelector('.minus')
const raz = document.querySelector('.reset')
const span = document.querySelector('.counter')
let cpt = 0

//-----------------------------------------------
//  Function Declaration
//-----------------------------------------------

//  fonction d'adittion
function fplus(){ 
    return cpt += 1
}

//  fonction de soustraction
function fminus(cpt){
    if (cpt != 0) 
        cpt -= 1
    return cpt 
}

//  fonction de remise a zero
function freset() {
    return cpt = 0
}

//-----------------------------------------------
// Main Code
//-----------------------------------------------

//  Ajout de l'evenement sur le plus et maj du cpt
plus.addEventListener('click', () => {
    console.log('plus')
    cpt = fplus()
    console.log(cpt)
    span.innerText = cpt
  })

//  Ajout de l'evenement sur le moin et maj du cpt
moin.addEventListener('click', () => {
    console.log('minus')
    cpt = fminus(cpt)
    console.log(cpt)
    span.innerText = cpt
  })

//   Ajout de l'evenement sur le raz et maj du cpt
raz.addEventListener('click', () => {
    console.log('reset')
    cpt = freset()
    console.log(cpt)
    span.innerText = cpt
  })

