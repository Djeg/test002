const minValue = 0
const resetValue = 0 // could be different that minValue
let counter = resetValue // start with reset value
let counterIncrement = 1 // default increment = 1

//------------------------------------------------------------------------
/**
 * this fonction display the counter in the right place.
 * param  value to be display
 * return : void
 */
function displayCounter(value) {
  const myDisplay = document.querySelector('.counter-display')
  myDisplay.innerText = value
}

//------------------------------------------------------------------------
/**
 * this function increment the counter and display it
 * param : void
 * return : void
 */
function incrementCounter() {
  counter += counterIncrement
  displayCounter(counter)
}

//------------------------------------------------------------------------
/**
 * this function decrement the counter display it
 * warning : counter should never be lower than min-value
 * param : void
 * return : void
 */
function decrementCounter() {
  if (counter - counterIncrement >= minValue) {
    counter -= counterIncrement
  } else {
    counter = minValue
  }

  displayCounter(counter)
}
//------------------------------------------------------------------------
/**
 * this function set the  counter to the resetValue
 * param : void
 * return : void
 *
 */
function resetCounter() {
  counter = resetValue
  displayCounter(counter)
}
//------------------------------------------------------------------------
/**
 * this function set the increment for counter step
 * value come from input text and need to be cas in int (base10)
 * if not int value then display current counterIncrement in the input
 * param : void
 * return : void
 *
 */
function changeIncrement() {
  const myNumber = document.querySelector('.input-increment').value

  counterIncrement = parseInt(myNumber, 10)
}
//------------------------------------------------------------------------
/**
 * this function initialize home page in order to keep an oppening light and fast
 * param : void
 * return : void
 */
function initPage() {
  // display counter  on init counter = reset value
  displayCounter(counter)

  // listener for each button (increment, decrement and reset )
  document
    .querySelector('.increment')
    .addEventListener('click', incrementCounter)
  document
    .querySelector('.decrement')
    .addEventListener('click', decrementCounter)
  document.querySelector('.reset').addEventListener('click', resetCounter)

  document
    .querySelector('.input-increment')
    .addEventListener('change', changeIncrement)

  document.querySelector('.input-increment').value = counterIncrement
}

document.addEventListener('DOMContentLoaded', initPage) // waiting for document loaded before code executing
