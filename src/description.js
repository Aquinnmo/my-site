//need to convert this to a .jsx component

export function displayDescripton(element, counter) {
    // Add the fade classes if not already present
    element.classList.add('description-fade');
    
    // Fade out
    element.classList.add('fade-out');
    
    // Wait for fade out, then update content and fade in
    setTimeout(() => {
        if (counter == 0) {
            element.innerHTML = `
            <ul>
            <li>Second year computer science co-op student @ the University of Guelph </li>
            <li>VP of External Affairs SOCIS</li>
            <li>Hockey Player/Fan </li>
            </ul>`;
        } else {
            element.innerHTML = `I am a second-year computer science enrolled at the University of Guelph.
             I am currently the Vice-President of External Affairs for the Guelph School of Computer Science.
              I am also helping train AI Models as a contractor for DataAnnotation.
            Beyond what I do professionally, I am an avid hockey player and watcher. I am
             a competitor that wants to be the best at whatever I do, while engaging with 
             everyone I work with.`;
        }
        // Fade in
        element.classList.remove('fade-out');
    }, 500); // Match this with CSS transition duration
}