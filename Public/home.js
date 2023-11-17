import { MuestraCard } from "./Components/Card.js";

const jsonContainer = document.getElementById('men-container');
const jsonContainer2 = document.getElementById('women-container');
const jsonContainer3 = document.getElementById('jew-container');

window.addEventListener('load', () => {
    const MaxProd = 4;
    fetch("https://fakestoreapi.com/products/category/men's clothing").then(res => res.json()).then(json => {               
            let filtraritems = json.filter(e => e.category === "men's clothing").slice(0, MaxProd);
            const cards = filtraritems.map(e => {
                return MuestraCard(e.image, e.title);
        }).join('');
        console.log(json)
        jsonContainer.innerHTML = cards;
    });
    fetch("https://fakestoreapi.com/products/category/women's clothing").then(res => res.json()).then(json => {               
            console.log(json); 
            let filtraritems = json.filter(e => e.category === "women's clothing").slice(0, MaxProd);
            const cards = filtraritems.map(e => {
                return MuestraCard(e.image, e.title);
        }).join('');
        jsonContainer2.innerHTML = cards;
    });
    fetch('https://fakestoreapi.com/products/category/jewelery').then(res => res.json()).then(json => {               
            console.log(json); 
            let filtraritems = json.filter(e => e.category === 'jewelery').slice(0, MaxProd);
            const cards = filtraritems.map(e => {
                return MuestraCard(e.image, e.title);
        }).join('');
        jsonContainer3.innerHTML = cards;
    });
});
