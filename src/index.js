


let count = 0;

const nbrInput = document.querySelector('.number');
const plusButton = document.querySelector(".plus");

if (nbrInput && plusButton) {
  plusButton.addEventListener("click", () => {
    const nbr = nbrInput.value;
    const amount = parseInt(nbr, 10) || 1;
    count += amount;
    document.querySelector(".counter").innerHTML = count;
  });
}

// on recupere le boutton moins dans une constante
const minusButton = document.querySelector(".minus");
//on ajoute une fonction au click sur le boutton - qui decrèmente de 1 a chaque fois qu'on clique
if (nbrInput && minusButton) {
    minusButton.addEventListener("click", () => {
      const nbr = nbrInput.value;
      const amount = parseInt(nbr, 10) || 1;
      if(count > 0){
          count -= amount;
      }
      if(count < 0){
        count = 0;
      }
      document.querySelector(".counter").innerHTML = count;
    });
  }

// on recupere le bouton reset dans une constante
const resetButton = document.querySelector(".reset");

////on ajoute une fonction au click sur le boutton reset qui remet le compteur a 0 a chaque fois qu'on clique
resetButton.addEventListener("click", () => {
    count = 0;
    document.querySelector(".counter").innerHTML = count;
});


