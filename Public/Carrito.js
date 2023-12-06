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

const EliminarProductomsj = () => {
    const mensaje = document.createElement('div');
    mensaje.classList.add('mensaje-agregado');
    mensaje.textContent = 'Producto eliminado del carrito';
  
    document.body.appendChild(mensaje);
  
    setTimeout(() => {
      mensaje.remove();
    }, 2000);
  };

document.getElementById('carrito-container').addEventListener('click', (event) => {
    const miBotonEliminar = event.target.closest('.btn-eliminar');
    
    if (miBotonEliminar) {
        const productId = miBotonEliminar.getAttribute('data-product-id');
        console.log('El producto:', productId, 'se ha eliminado correctamente!');
        EliminarProductomsj();
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

const mostrarMensaje = (mensaje) => {
  const mensajeElement = document.getElementById('mensaje');
  mensajeElement.textContent = mensaje;
  mensajeElement.style.display = 'block';
  setTimeout(() => {
    mensajeElement.style.display = 'none';
  }, 5000);
};

const comprarProductos = () => {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';
  
    const totalPrecioElement = document.getElementById('totalPrecio');
    const cantidadProductosElement = document.getElementById('cantidadProductos');
  
    const mensaje = `¡Has comprado ${cantidadProductosElement.textContent} producto(s) por un valor de ${totalPrecioElement.textContent}! Muchas gracias por comprar en nuestra tienda, ¡vuelva pronto!`;
    mostrarMensaje(mensaje);
  
    localStorage.removeItem('cart');
    mostrarCarrito([]);
    resetearProductId();
};


const vaciarCarrito = () => {
    localStorage.removeItem('cart');
    mostrarCarrito([]);
  
    const mensaje = 'Has vaciado el carrito!';
    mostrarMensaje(mensaje);
    resetearProductId();
};

comprarBtn.addEventListener('click', comprarProductos);
vaciarBtn.addEventListener('click', vaciarCarrito);

const buscarProducto = () => {
    const textoBusqueda = document.getElementById('buscarProducto').value.toLowerCase();
    const productosEnLocalStorage = obtenerDatosLocalStorage();
  
    const productosFiltrados = productosEnLocalStorage.filter((producto) => {
      return producto.name.toLowerCase().includes(textoBusqueda);
    });
  
    mostrarCarrito(productosFiltrados);
  };
  
  document.getElementById('buscarProducto').addEventListener('input', buscarProducto);

  let Orden = true;

const ordenarPorPrecio = () => {
  const productosEnLocalStorage = obtenerDatosLocalStorage();

  if (Orden) {
    productosEnLocalStorage.sort((a, b) => a.price - b.price);
  } else {
    productosEnLocalStorage.sort((a, b) => b.price - a.price);
  }

  mostrarCarrito(productosEnLocalStorage);
  Orden = !Orden;
};

document.getElementById('filtrarBtn').addEventListener('click', ordenarPorPrecio);

let Abecedario = true;

const ordenarAlfabeticamente = () => {
  const productosEnLocalStorage = obtenerDatosLocalStorage();

  if (Abecedario) {
    productosEnLocalStorage.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    productosEnLocalStorage.sort((a, b) => b.name.localeCompare(a.name));
  }

  mostrarCarrito(productosEnLocalStorage);
  Abecedario = !Abecedario;
};

document.getElementById('OrdenAlfabetico').addEventListener('click', ordenarAlfabeticamente);


  
  