//need to convert to a .jsx component

import { displayDescripton } from "./description"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    if (count % 2 == 0)
    {
      counter = 0
    }
    if (counter == 0)
    {
      element.innerHTML = `View Expanded Description`
      displayDescripton(document.querySelector('#description'), counter)
    }
    else
    {
      element.innerHTML = `View Concise Description`
      displayDescripton(document.querySelector('#description'), counter)
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}