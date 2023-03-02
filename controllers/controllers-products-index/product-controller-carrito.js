import { productosServices } from '../../services/productos-service.js';
//export let cart = new Set([]);
let cart = [];
let cartTotal = 0;
const obtenerInformacion = async () => {
    try {
        //Obtenemos los productos del Json
        const product = await productosServices.lista_productos();
        console.log(product)
        // Iterar sobre los productos y crear elementos div con la clase product-LIst en el DOM
        for (let producto of product) {
            let item = document.createElement('div');
            item.classList.add("product-item");
            item.innerHTML = `
            <img src="${producto.url}" alt="Product 2">
            <h3>${producto.name}</h3>
            <p>${producto.price}</p>
            <button class="add-to-cart" data-url="${producto.url}" data-name="${producto.name}" data-price="${producto.price}">Agregar al carrito</button>
        `;
            document.getElementById('product-list').appendChild(item);
        }

        // Agregar manejador de eventos al botón "Agregar al carrito"
        let buttons = document.querySelectorAll('.add-to-cart');
        console.log(buttons)
        //Recoremos cada boton creadi para asignarle un evento
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                //cada uno de los botones servira para guardar los datos de su producto correspondiente
                let product = {
                    url: this.dataset.url,
                    name: this.dataset.name,
                    price: parseFloat(this.dataset.price),
                    quantity: 1
                };
                console.log(product + "este es el product")
                addToCart(product);
                updateCart();
            });
        }
    } catch (err) {
        console.log(err)
    }

};
obtenerInformacion();

// Agregar producto al carrito
function addToCart(product) {
    // Buscar si el producto ya está en el carrito
    //cart.findIndex, Primero Guarda los productos, luego verifica si los porductos ya estan en la lista cart
    //En caso de que ya esten suma la cantidad en caso de que sea nuevo lo guarda 
    let index = cart.findIndex(item => item.name === product.name);
    /* let foundIndex = -1; // si no se encuentra el elemento, se establece foundIndex en -1

    cart.forEach((item) => {
        if (item.name === product.name) {
            foundIndex = 1;
            return; // se detiene el bucle forEach después de encontrar el elemento
        }
    }); */
    //let index = foundIndex;
    console.log(index);
    if (index !== -1) {//si es diferente -1 esta en la lista de cart entonces no lo agrega y suma su cantidad
        cart[index].quantity++;
    } else {
        cart.push(product); //si no lo agrega a la lista de carrito
    }
    // Actualizar el LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Mostrar una alerta
    //Mensaje 
    function showAlert() {
        alertify.success('El producto se agregó satisfactoriamente');
    }
    showAlert();
}
export function obtenerLista() {
    return cart;
}

// Actualizar la información del carrito en la página
function updateCart() {
    // Limpiar el contenido del carrito
    document.getElementById('cart-items').innerHTML = '';

    // Recalcular el total del carrito
    cartTotal = 0;
    // Agregar los productos al carrito
    for (let product of cart) {
        let seccion = document.createElement('div');
        seccion.classList.add("product__item__carrito");
        seccion.innerHTML = `
        <div class="product__img__contenedor">
            <img class="product__img__carrito" src="${product.url}" alt="Product 2">
        </div>
        <h3 class="product__name__carrito">${product.name}</h3>
        <div class="product__contador__carrito">
            <button class="btn-increment btn__contador" data-name="${product.name}">+</button>
            <span id="cart-count">0</span>
            <button class="btn__contador" data-name="${product.name}">-</button>
            <button class="remove-item btn__delete__carrito" data-name="${product.name}"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>

        `;
        document.getElementById('cart-items').appendChild(seccion);
        cartTotal += product.price * product.quantity;
    }

    // Actualizar el total del carrito
    document.getElementById('product__prices').innerText = `$${cartTotal.toFixed(2)}`;

    // Agregar manejador de eventos al botón "Eliminar"
    let buttons = document.querySelectorAll('.remove-item');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            removeFromCart(this.dataset.name);
            updateCart();
        });
    }
    //Manejador de eventos para los botones 
    let buttonsIncrement = document.querySelectorAll('.btn-increment');
    console.log(buttonsIncrement)
    for (let i = 0; i < buttonsIncrement.length; i++) {
        buttonsIncrement[i].addEventListener('click', function () {
            console.log(this.dataset.name);

        });
    }
}
// Eliminar un producto del carrito
function removeFromCart(name) { //Recibe eL nombre dek producto a eliminar
    // Buscar el producto en el carrito
    //let index = cart.findIndex(item => item.name === name);
    let index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart[index].quantity--;
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
        // Actualizar el LocalStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Mostrar una alerta
        alert(`${name} ha sido eliminado del carrito`);
    }
}

// Cargar el carrito desde el LocalStorage (si existe)
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCart();
}