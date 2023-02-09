import { productosServices } from '../../services/productos-service.js';
const container = document.getElementById('product-list');
//Lista para verificar cuantos productos se estan agregado al carrito con set para que no se repitan
export let uniqueItems = new Set([]);
container.addEventListener('click', event => {
    if (event.target.matches('.get-product')) {
        const productId = event.target.getAttribute('data-product-id');
        console.log(uniqueItems);
        if (!uniqueItems.has(productId)) {//Si el Producto no se encuentra en el carrito que lo añada
            console.log("El producto esta en el carrito");
            //Obtenemos la informacion del producto seleccionado por su id

            const obtenerInformacion = async () => {
                try {
                    //Hacemos el llmado del producto por su id
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
                        <button class="btn__delete__carrito"><i class="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                    `
                    seccion.innerHTML = productos;

                    //Agregamos el producto ára verificar si el carrito abrira o no 
                    uniqueItems.add(product.id);

                    //Mensaje 
                    function showAlert() {
                        alertify.success('El producto se agregó satisfactoriamente');
                      }
                      showAlert();
                } catch (err) {
                    console.log(err);
                }
            }
            obtenerInformacion();
        }
        
    }
});