//Initialisation de la variables
let compteur = 0

//Incrémente et décrémente le compteur en fonction du bouton appuyé
export function operation(increment = false, decremente = false, reset = false){
    const display = document.querySelector('.counter')

    if(reset){
        console.log('reset')
        compteur = 0
        display.innerText = compteur
        return
    }

    if(increment){
        console.log('add')
        compteur += 1
        display.innerText = compteur
        return
    }

    if(decremente){
        console.log('false')
        compteur -= 1
        if(compteur <= 0){
            compteur = 0
        }
        display.innerText = compteur
        return
    }
}