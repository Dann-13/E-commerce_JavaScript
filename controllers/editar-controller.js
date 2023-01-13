import { productosServices } from "../services/productos-service.js";
const formulario = document.querySelector('[data-form]');
console.log(formulario)
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        //window.location.href = '';
        console.log("Error");
    }
    const urlimagen = document.querySelector('[data-url]');
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');
    try {
        const product = await productosServices.detalleProducto(id);
        console.log(product);

        if (product.name) {
            urlimagen.value = product.url;
            nombre.value = product.name;
            precio.value = product.price;
            descripcion.value = product.description;
            console.log(urlimagen.value);
        }
    } catch (error) {
        console.log("error catch");
    }
}
obtenerInformacion();
const form = document.getElementById('update-product-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // para evitar recarga de pagina
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const updatedProduct = {
        url: form.elements.url.value,
        name: form.elements.name.value,
        price: form.elements.price.value,
        description: form.elements.description.value
    }
    console.log(updatedProduct);
    productosServices.updateProduct(id, updatedProduct).then(() => {
        window.location.href='/assets/screens/edicionCompleta.html';

        console.log("Edicion satisfactoria");

    });
});