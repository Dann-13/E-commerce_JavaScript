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
                seccion.classList.add("product-item");
                productResults.appendChild(seccion);
                const productos = `
                    <img src="${product.url}" alt="Product 2">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>`
                    seccion.innerHTML = productos;

            } catch (err) {
                console.log(err);
            }
        }
        obtenerInformacion();
    }
});