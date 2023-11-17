import { CustomCard } from "./Components/Card.js"

const jsonContainer = document.getElementById('json-container');

window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/category/jewelery').then(res => res.json()).then(json => {               
            console.log(json); 
            let filtraritems = json.filter(e => e.category === 'jewelery');
            const cards = filtraritems.map(e => {
            return CustomCard(e.image, e.title, e.description, e.price);
        }).join('');
        jsonContainer.innerHTML = cards;
    });
});