const counter = document.querySelector('.counter')
const incrementInput = document.querySelector('.increment-input')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const resetButton = document.querySelector('.reset')

let count = 0

plusButton.addEventListener('click', () => {
  count += parseInt(incrementInput.value)
  counter.innerHTML = count
})

minusButton.addEventListener('click', () => {
  count -= parseInt(incrementInput.value)
  if (count < 0) {
    count = 0
  }
  counter.innerHTML = count
})

resetButton.addEventListener('click', () => {
  count = 0
  counter.innerHTML = count
})
