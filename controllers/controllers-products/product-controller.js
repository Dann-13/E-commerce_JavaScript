//listamos los productos en la pagina products(index)
import { productosServices } from "../../services/searchProductServices.js";
const crearNuevaSeccion = (url, name, price) =>{
    const seccion = document.createElement("div");
    seccion.classList.add("product-item");
    const productos = `
    <img src="${url}" alt="Product 2">
        <h3>${name}</h3>
        <p>${price}</p>
        <button>Add to cart</button>
    `
    seccion.innerHTML = productos;
    return seccion;
}
const seleccion = document.getElementById("product-list");
productosServices.lista_productos().then((data) =>{
    data.forEach(({url, name, price}) =>{
        const nuevaLinea = crearNuevaSeccion(url,name,price);
        seleccion.appendChild(nuevaLinea);
    });
});
