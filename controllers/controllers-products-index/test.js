import { productosServices } from '../../services/productos-service.js';
let cart = [];
let cartTotal = 0;

const obtenerInformacion = async () => {
    try {
        const product = await productosServices.lista_productos();
        // Iterar sobre los productos y crear elementos <li> en el DOM
        for (let producto of product) {
            let item = document.createElement('li');
            item.innerHTML = `
          <h2>${producto.name}</h2>
          <p>${producto.description}</p>
          <p>Precio: $${producto.price}</p>
          <button class="add-to-cart" data-name="${producto.name}" data-price="${producto.price}">Agregar al carrito</button>
        `;
            document.getElementById('product-list').appendChild(item);
        }

        // Agregar manejador de eventos al botón "Agregar al carrito"
        let buttons = document.querySelectorAll('.add-to-cart');
        console.log(buttons)
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                let product = {
                    name: this.dataset.name,
                    price: parseFloat(this.dataset.price),
                    quantity: 1
                };
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
    let index = cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push(product);
    }
    // Actualizar el LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Mostrar una alerta
    alert(`${product.name} ha sido agregado al carrito`);
}

// Actualizar la información del carrito en la página
function updateCart() {
    // Limpiar el contenido del carrito
    document.getElementById('cart-items').innerHTML = '';

    // Recalcular el total del carrito
    cartTotal = 0;

    // Agregar los productos al carrito
    for (let product of cart) {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td><button class="btn-decrement" data-name="${product.name}">-</button>
        ${product.quantity}
        <button class="btn-increment" data-name="${product.name}">+</button></td>
        <td>$${(product.price * product.quantity).toFixed(2)}</td>
        <td><button class="remove-item" data-name="${product.name}">Eliminar</button></td>
      `;
        document.getElementById('cart-items').appendChild(row);
        cartTotal += product.price * product.quantity;
    }

    // Actualizar el total del carrito
    document.getElementById('cart-total').innerText = `$${cartTotal.toFixed(2)}`;

    // Agregar manejador de eventos al botón "Eliminar"
    let buttons = document.querySelectorAll('.remove-item');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            removeFromCart(this.dataset.name);
            updateCart();
        });
    }

}

// Eliminar un producto del carrito
function removeFromCart(name) {
    // Buscar el producto en el carrito
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

// Vaciar el carrito
function clearCart() {
    cart = [];
    // Actualizar el LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    // Mostrar una alerta
    alert('El carrito ha sido vaciado');
}

// Agregar manejador de eventos al botón "Vaciar carrito"
document.getElementById('clear-cart').addEventListener('click', function () {
    clearCart();
});

// Cargar el carrito desde el LocalStorage (si existe)
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCart();
}