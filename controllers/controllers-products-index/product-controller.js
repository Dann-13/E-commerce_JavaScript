/* //listamos los productos en la pagina products(index)
import { productosServices } from "../../services/searchProductServices.js";
const crearNuevaSeccion = (url, name, price, id) => {
    const seccion = document.createElement("div");
    seccion.classList.add("product-item");
    seccion.dataset.id = `${id}`;
    const productos = `
    <img src="${url}" alt="Product 2">
        <h3>${name}</h3>
        <p>${price}</p>
        <button class="add-to-cart" data-name="${name}" data-price="${price}">Agregar al carrito</button>
    `
    seccion.innerHTML = productos;
    return seccion;
}
const seleccion = document.getElementById("product-list");
productosServices.lista_productos().then((data) => {
    data.forEach(({ url, name, price, id }) => {
        const nuevaLinea = crearNuevaSeccion(url, name, price, id);
        seleccion.appendChild(nuevaLinea);
    });
});
 */