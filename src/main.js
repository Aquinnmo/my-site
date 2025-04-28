import './style.css'
import githubLogo from '/github_logo.svg'
import linkedInLogo from '/LinkedIn_icon.svg'
import emailIcon from '/email_icon.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="mailto:aquinnmo@outlook.com">
      <img src="${emailIcon}" class="logo vanilla" alt="email" />
    </a>
    <a href="https://linkedin.com/in/adam-montgomery-05a936315" target="_blank">
      <img src="${linkedInLogo}" class="logo" alt="LinkedIn logo" />
    </a>
    <a href="https://github.com/Aquinnmo" target="_blank">
      <img src="${githubLogo}" class="logo vanilla" alt="Github logo" />
    </a>
    <h1>Hello I'm Adam!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
