
const minValue = 0 ; 
const resetValue = 0 ;        // could be different that minValue
let counter = resetValue;     // start with reset value


/**
 * this fonction display the counter in the right place.
 * param  value to be display
 * return : void 
 */

function displayCounter(value){
  
  const myDisplay=document.querySelector('.counter-display');
  myDisplay.innerText = value;

}

//------------------------------------------------------------------------
/**
 * this function increment the counter and display it 
 * param : void
 * return : void 
 *  */
function incrementCounter(){

  counter +=1;
  displayCounter(counter);

}

//------------------------------------------------------------------------
/**
 * this function decrement the counter display it 
 * warning : counter should never be lower than min-value
 * param : void
 * return : void 
 *  */
function decrementCounter(){

  console.log(" incrementCounter");
  if (counter > minValue){
    counter -=1;
  }
  else{
    counter = minValue;
  }

  displayCounter(counter);

}

//------------------------------------------------------------------------
/**
 * this function set the  counter to the resetValue
 * param : void
 * return : void 
 *  
 * */
function resetCounter(){

  counter = resetValue; 
  displayCounter(counter);

}

//------------------------------------------------------------------------
/**
 * this function initialize home page in order to keep an oppening light and fast 
 * param : void
 * return : void 
 */

function initPage(){

  // display counter  on init counter = reset value
displayCounter(counter) ;

// listener for each button (increment, decrement and reset )
document.querySelector('.increment')
        .addEventListener('click', incrementCounter)
document.querySelector('.decrement')
        .addEventListener('click', decrementCounter)
document.querySelector('.reset')
        .addEventListener('click', resetCounter)

}



document.addEventListener("DOMContentLoaded",initPage); 	// waiting for document loaded before code executing
