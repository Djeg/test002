//Initialisation de la variables
let compteur = 0

//Incrémente et décrémente le compteur en fonction du bouton appuyé
export function operation(increment = false, decremente = false, reset = false, valeurIncrement = 1){
    const display = document.querySelector('.counter')

    if(reset){
        compteur = 0
        display.innerText = compteur
        return
    }

    if(increment){
        compteur += parseInt(valeurIncrement)
        display.innerText = compteur
        return
    }

    if(decremente){
        compteur -= parseInt(valeurIncrement)
        if(compteur <= 0){
            compteur = 0
        }
        display.innerText = compteur
        return
    }
}