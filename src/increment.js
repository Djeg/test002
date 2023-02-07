//Initialisation de la variables
let compteur = 0

//Incrémente et décrémente le compteur en fonction du bouton appuyé
export function operation(op, reset = false){
    const display = document.querySelector('.counter')

    if(reset){
        compteur = 0
        display.innerText = compteur
        return
    }

    if(op === true){
        compteur += 1
        display.innerText = compteur
        return
    }

    if(op === false){
        compteur -= 1
        if(compteur <= 0){
            compteur = 0
            display.innerText = compteur
        }
        else{
            display.innerText = compteur
            return
        }
    }
}