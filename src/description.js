export function displayDescripton(element, counter) {
    if (counter == 0)
    {
        element.innerHTML = `This will be the short description of me`
    }
    else
    {
        element.innerHTML = `This will be the long description of me`
    }
  }