

const plus = document.querySelector(".plus")
const moin = document.querySelector(".moin")
const reset = document.querySelector(".reset")
const counter= document.querySelector(".counter")
let cpt=0
counter.textContent=cpt

plus.addEventListener('click',function(){
       cpt++ 
       counter.textContent=cpt
    })

moin.addEventListener('click',function(){
    if(cpt>0){
        cpt--
        counter.textContent=cpt
    }
})
reset.addEventListener('click',function(){
       cpt=0
       counter.textContent=cpt
})


