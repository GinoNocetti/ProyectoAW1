import { CarritoCard } from "./Components/Card.js";

const comprarBtn = document.getElementById('comprarProductos');
const vaciarBtn = document.getElementById('eliminarProductos');

const mostrarCarrito = (productos) => {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    productos.forEach((producto) => {
        const { name, price, productId, image, quantity } = producto;
        const card = CarritoCard(image, name, (price * quantity).toFixed(2), quantity, productId); 
        carritoContainer.innerHTML += card;
    });

    const totalPrecio = productos.reduce((total, producto) => total + producto.price * producto.quantity, 0);
    const cantidadProductos = productos.reduce((total, producto) => total + producto.quantity, 0);

    const totalPrecioElement = document.getElementById('totalPrecio');
    const cantidadProductosElement = document.getElementById('cantidadProductos');

    totalPrecioElement.textContent = `$${totalPrecio.toFixed(2)}`;
    cantidadProductosElement.textContent = cantidadProductos.toString();

    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const productId = boton.getAttribute('data-product-id');
            eliminarProducto(productId);
        });
    });
};


const obtenerDatosLocalStorage = () => {
    const datos = JSON.parse(localStorage.getItem('cart')) || [] ;
    return datos;
};

const cartDataFromLocalStorage = obtenerDatosLocalStorage();

const eliminarProducto = (productId) => {
    let cartData = obtenerDatosLocalStorage();
    const nuevoCartData = cartData.filter(producto => parseInt(producto.productId) !== parseInt(productId));
    localStorage.setItem('cart', JSON.stringify(nuevoCartData));
    mostrarCarrito(nuevoCartData);
};

mostrarCarrito(cartDataFromLocalStorage);

document.getElementById('carrito-container').addEventListener('click', (event) => {
    const miBotonEliminar = event.target.closest('.btn-eliminar');
    
    if (miBotonEliminar) {
        const productId = miBotonEliminar.getAttribute('data-product-id');
        console.log('El producto:', productId, 'se ha eliminado correctamente!');
        eliminarProducto(productId);
    }
});

const resetearProductId = () => {
    let id = 1;
    localStorage.setItem('productIdCounter', JSON.stringify(id));
};

const obtenerProductId = () => {
    const id = JSON.parse(localStorage.getItem('productId'));
    return id ? id : 1;
};

const comprarProductos = () => {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';
  
    const totalPrecioElement = document.getElementById('totalPrecio');
    const cantidadProductosElement = document.getElementById('cantidadProductos');
  
    const mensaje = `¡Has comprado ${cantidadProductosElement.textContent} producto(s) por un valor de ${totalPrecioElement.textContent}! Muchas gracias por comprar en nuestra tienda, ¡vuelva pronto!`;
    alert(mensaje);
  
    localStorage.removeItem('cart');
    mostrarCarrito([]);
    resetearProductId();
};


const vaciarCarrito = () => {
    localStorage.removeItem('cart');
    mostrarCarrito([]);
  
    const mensaje = 'Has vaciado el carrito!';
    alert(mensaje);
    resetearProductId();
};

comprarBtn.addEventListener('click', comprarProductos);
vaciarBtn.addEventListener('click', vaciarCarrito);