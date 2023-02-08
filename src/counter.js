/**
 * @module counter
 *
 * @description
 *  Contains all functions concerning the counter app
 */

/**
 * Returns the amount of an element in number
 */
export function getAmount(element) {
  return () => parseInt(element.innerText, 10) || 0
}

/**
 * Fonction allowing to create an event incrementing an amount in an element
 */
export function incrementEvent(element, getAmount, getIncrement) {
  return () => {
    element.innerText = getAmount() + getIncrement()
  }
}

/**
 * Fonction allowing to create an event decrementing an amount in an element
 */
export function decrementEvent(element, getAmount, getIncrement, min = 0) {
  return () => {
    element.innerText = Math.max(min, getAmount() - getIncrement())
  }
}

/**
 * Reset a given counter or increment
 */
export function resetEvent(element) {
  return () => {
    element.innerText = '0'
  }
}

/**
 * Initialize the counter application by giving a bunch
 * of data
 */
export function initializeCounter({
  counterPlus,
  counterMinus,
  incrementPlus,
  incrementMinus,
  reset,
  counter,
  increment,
} = {}) {
  // On plus and minus on the counter
  counterPlus.addEventListener(
    'click',
    incrementEvent(counter, getAmount(counter), getAmount(increment)),
  )
  counterMinus.addEventListener(
    'click',
    decrementEvent(counter, getAmount(counter), getAmount(increment), 0),
  )

  // On reset on the counter
  reset.addEventListener('click', resetEvent(counter))

  // On plus and minus on the increment
  incrementPlus.addEventListener(
    'click',
    incrementEvent(increment, getAmount(increment), () => 1),
  )
  incrementMinus.addEventListener(
    'click',
    decrementEvent(increment, getAmount(increment), () => 1, 1),
  )
}
