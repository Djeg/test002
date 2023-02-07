// on declare une variable count et on met le compteur à 0 
let count = 0;

// on recupere le boutton plus dans une constante
const plusButton = document.querySelector(".plus");

//on ajoute une fonction au click sur le boutton + qui incrèmente de 1 a chaque fois qu'on clique
plusButton.addEventListener("click", function () {
    count++;
    document.querySelector(".counter").innerHTML = count;
});

// on recupere le boutton moins dans une constante
const minusButton = document.querySelector(".minus");
//on ajoute une fonction au click sur le boutton - qui decrèmente de 1 a chaque fois qu'on clique
minusButton.addEventListener("click", function () {
    if(count > 0){
        count--;
        document.querySelector(".counter").innerHTML = count;
    }
    
    
});

// on recupere le bouton reset dans une constante
const resetButton = document.querySelector(".reset");

////on ajoute une fonction au click sur le boutton reset qui remet le compteur a 0 a chaque fois qu'on clique
resetButton.addEventListener("click", function () {
    count = 0;
    document.querySelector(".counter").innerHTML = count;
});