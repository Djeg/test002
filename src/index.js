//Recuper la valeur de span
const valeurCompteur = document.querySelector('.counter')

//créer un événement au buton + plus
document.querySelector('.plus').addEventListener('click', compteurPlus)

let compteur = 0
//Ajouter la fonction compteur plus
function compteurPlus() {
  compteur += 1
  valeurCompteur.innerHTML = compteur
}

//créer un événement au buton + minus
document.querySelector('.minus').addEventListener('click', compteurMinus)
// créer la fonction compteurMinus
function compteurMinus() {
  if (compteur <= 0) {
    compteur = 0
    valeurCompteur.innerHTML = compteur
  } else {
    compteur -= 1
    valeurCompteur.innerHTML = compteur
  }
}

//créer un événement au buton RESET
document.querySelector('.reset').addEventListener('click', compteurReset)
// créer la fonction reset
function compteurReset() {
  compteur = 0
  valeurCompteur.innerHTML = compteur
}
