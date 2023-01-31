import { productosServices } from '../../services/productos-service.js';
const container = document.getElementById('product-list');
container.addEventListener('click', event => {
    if (event.target.matches('.get-product')) {
        const productId = event.target.getAttribute('data-product-id');
        console.log(productId);

        const obtenerInformacion = async () => {
            try {
                const product = await productosServices.detalleProducto(productId);
                console.log(product.name);
                //Seleccionamos el div contendor de productos del carrito
                const productResults = document.querySelector('.product__list');
                //Creamos un nuevo elemento dentro del contenedor 
                const seccion = document.createElement("div");
                seccion.classList.add("product__item__carrito");
                productResults.appendChild(seccion);
                const productos = `
                    <div class="product__img__contenedor">
                    <img class="product__img__carrito" src="${product.url}" alt="Product 2">
                    </div>
                    <h3 class="product__name__carrito">${product.name}</h3>
                    <div class="product__contador__carrito">
                        <button class="btn__contador" onclick="addToCart()">+</button>
                            <span id="cart-count">0</span>
                        <button class="btn__contador" onclick="removeFromCart()">-</button>
                    </div>
                    `
                    //<p class="product__price__carrito">${product.price}</p>
                    seccion.innerHTML = productos;

            } catch (err) {
                console.log(err);
            }
        }
        obtenerInformacion();
    }
});