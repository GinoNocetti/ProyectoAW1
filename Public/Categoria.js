import { CustomCard } from "./Components/Card.js";
import { addToCart, getCartData } from "./cartController.js";

const categoria = document.getElementById('cate').value;
const jsonContainer = document.getElementById('json-container');

const baseURL = 'https://fakestoreapi.com/products/category/';

const CategoriaAPI = (categoria, container) => {
    const url = baseURL + categoria;

    fetch(url).then(res => res.json()).then(json => {       
        let filteredItems = json.filter(e => e.category === categoria);
        const cards = filteredItems.map(e => {
            return CustomCard(e.image, e.title, e.description, e.price, e.id);
        }).join('');
        container.innerHTML = cards;
    });
};  

window.addEventListener('load', () => {
    CategoriaAPI(categoria, jsonContainer);
});

let productIdCounter = localStorage.getItem('productIdCounter') || 1
document.getElementById('click')

document.getElementById('json-container').addEventListener('click', (event) => {
    const miBoton = event.target.closest('.btn-carrito');
    
    if (miBoton) {
      const card = miBoton.closest('.card');
      const productImage = card.querySelector('.card-img-top').getAttribute('src'); 
      const productName = card.querySelector('.card-title').innerText;
      const productPrice = parseFloat(card.querySelector('.card-price').innerText);
      const productQuantity = parseInt(card.querySelector('#quantity').value);
      const productId = productIdCounter++;
  
      const product = {
        productId,
        image: productImage,
        name: productName,
        price: productPrice,
        quantity: productQuantity
      };
  
      addToCart(product);
      console.log('¡Producto agregado!');
      localStorage.setItem('productIdCounter', productIdCounter);
    }
  });
  
