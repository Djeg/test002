
//-----------------------------------------------
//  const and var declaration
//-----------------------------------------------

const plus = document.querySelector('.plus')
const moin = document.querySelector('.moin')
const res = document.querySelector('.reset')
let cpt = 0

//-----------------------------------------------
//  Function Declaration
//-----------------------------------------------

//  Function d' adittion
function iplus () {
    cpt += 1
    return cpt
}

//  Function de soustraction
function dmoin () {
    if(cpt>=1){
     cpt -= 1
    }
    return cpt
}

//  Function de remise a zero
function reset () {
    cpt = 0
    return cpt
}

//-----------------------------------------------
// Main Code


//  Ajout de l'evenement sur le plus et maj du cpt
plus.addEventListener('click',()=>{
    console.log('plus')
    cpt = iplus()
    console.log(cpt)
    document.getElementById("count").innerHTML=cpt
})

//  Ajout de l'evenement sur le moin et maj du cpt
moin.addEventListener('click',()=>{
    console.log('moin')
    cpt = dmoin()
    console.log(cpt)
    document.getElementById("count").innerHTML=cpt
})

//  Ajout de l'evenement sur le raz et maj du cpt
res.addEventListener('click',()=>{
    console.log('reset')
    cpt = reset()
    console.log(cpt)
    document.getElementById("count").innerHTML=cpt
})


