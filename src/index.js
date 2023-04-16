import { initializeCounter } from './counter'

initializeCounter({
  counterPlus: document.querySelector('.counter-container .button.plus'),
  counterMinus: document.querySelector('.counter-container .button.minus'),
  incrementPlus: document.querySelector('.increment-container .button.plus'),
  incrementMinus: document.querySelector('.increment-container .button.minus'),
  reset: document.querySelector('.button.reset'),
  counter: document.querySelector('.amount.counter'),
  increment: document.querySelector('.amount.increment'),
})
