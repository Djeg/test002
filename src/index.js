//-----------------------------------------------
//  const and var declaration
//-----------------------------------------------

const plus = document.querySelector('.plus')
const moins = document.querySelector('.minus')
const raz = document.querySelector('.reset')
const span = document.querySelector('.counter')
let cpt = 0

//-----------------------------------------------
//  Function Declaration
//-----------------------------------------------

//  fonction d'adittion
function fplus(){ 
    return fcpt += 1
}

//  fonction de soustraction
function fminus(fcpt){
    if (fcpt != 0) 
        fcpt -= 1
    return fcpt 
}

//  fonction de remise a zero
function freset() {
    return fcpt = 0
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
moins.addEventListener('click', () => {
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