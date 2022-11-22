import { productosServices } from "../services/productos-service.js";
const form = document.querySelector('[data-form]');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcio]').value;
    console.log(url, nombre, precio, descripcion);
    productosServices.nuevo_Producto(url, nombre, precio, descripcion).then(response => {
        window.location.href = "../screens/registroCompleto.html";
    }).catch(error => console.console.log);
});