export function displayDescripton(element, counter) {
    if (counter == 0)
    {
        element.innerHTML = `Second year computer science co-op student @ the University of Guelph </br>
        VP of External Affairs SOCIS </br>
        Hockey Player/Fan </br>`
    }
    else
    {
        element.innerHTML = `I am a second-year computer science enrolled at the University of Guelph.
         I am currently the Vice-President of External Affairs for the Guelph School of Computer Science.
          I am also helping train AI Models as a contractor for DataAnnotation.
        Beyond what I do professionally, I am an avid hockey player and watcher. I am
         a competitor that wants to be the best at whatever I do, while engaging with 
         everyone I work with.`
    }
  }