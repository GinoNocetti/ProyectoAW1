import { productos } from "./Components/Card.js"

import { CustomCard } from "./Components/Card.js"
let CardConteiner = document.getElementById('card-container')

window.addEventListener('load', ()=> {
    let cate = parseInt(document.getElementById('cate').value)
    const prodcat = productos.filter(e => e.cate == cate)
    const cards = prodcat.map(e=> {
         return CustomCard(e.img, e.title, e.desc, e.precio)
    }).join('')
    console.log(cards)
    CardConteiner.innerHTML = cards
})