import { MuestraCard } from "./Components/Card.js";

const baseurl = "https://fakestoreapi.com/products/category/";

const jsonContainers = [
    document.getElementById('men-container'),
    document.getElementById('women-container'),
    document.getElementById('jew-container')
];

const categorias = [
    "men's clothing",
    "women's clothing",
    "jewelery"
];

const MaxProd = 4;

const CategoriaProductos = (url, container) => {
    fetch(url).then(res => res.json()).then(json => {       
        console.log(json);
        const filteredItems = json.slice(0, MaxProd);
        const cards = filteredItems.map(e => {
            return MuestraCard(e.image, e.title);
        }).join('');
        container.innerHTML = cards;
    });
};

for (let i = 0; i < categorias.length; i++) {
    const url = baseurl + categorias[i];
    CategoriaProductos(url, jsonContainers[i]);
}


