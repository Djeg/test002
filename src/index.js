/*
Exercice du compteur
*/

/*
En utilisant des fonctions :
- Lorsque je clique sur "+" le compteur augmente de 1
- Lorsque je clique sur "-" le compteur diminue de 1
- Lorsque je clique sur "reset" le compteur se remet à 0
*/

const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonReset = document.querySelector('.reset')
let compteur = document.querySelector('.counter')
const input = document.querySelector('input.nombre')
let x = 0
input.value = 0

buttonPlus.addEventListener('click', () => {
  x = x + parseInt(input.value)
  console.log((compteur.innerText = x))
})

buttonMinus.addEventListener('click', () => {
  if (x > 0) {
    x = x - parseInt(input.value)
  } else {
    x = 0
  }
  console.log((compteur.innerText = x))
})

buttonReset.addEventListener('click', () => {
  x = 0
  input.value = 0
  console.log((compteur.innerText = x))
})
