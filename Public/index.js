import { navbarComponent } from "./Components/Navbar.js"

let navConteiner = document.querySelector('header')

window.addEventListener('load', ()=> {
    navConteiner.innerHTML = navbarComponent
})