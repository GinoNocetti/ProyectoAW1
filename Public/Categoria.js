import { CustomCard } from "./Components/Card.js";
import { addToCart, getCartData } from "./cartController.js";

const baseURL = 'https://fakestoreapi.com/products/category/';
let productos = [];

const cargarDatos = (categoria, container) => {
    const url = baseURL + categoria;
    fetch(url).then(res => res.json()).then(json => {
      productos = json.filter(e => e.category === categoria);
      MostrarProductos(container);
    });
};

const MostrarProductos = (container) => {
    const cards = productos.map(e => {
        return CustomCard(e.image, e.title, e.description, e.price, e.id);
    }).join('');
    container.innerHTML = cards;
};

const OrdenarProductos = (ascendente) => {
    productos.sort((a, b) => (ascendente ? a.price - b.price : b.price - a.price));
};

window.addEventListener('load', () => {
    const categoria = document.getElementById('cate').value;
    const jsonContainer = document.getElementById('json-container');
    cargarDatos(categoria, jsonContainer);

    const ordenarBtn = document.getElementById('ordenarBtn');
    let Orden = true;

    ordenarBtn.addEventListener('click', () => {
      Orden = !Orden;
      OrdenarProductos(Orden);
      MostrarProductos(jsonContainer);
    });
});

let productIdCounter = localStorage.getItem('productIdCounter') || 1
document.getElementById('click')

const AgregarProductomsj = () => {
  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje-agregado');
  mensaje.textContent = 'Producto agregado al carrito';

  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
};

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
      AgregarProductomsj();
      localStorage.setItem('productIdCounter', productIdCounter);
    }
  });
  
