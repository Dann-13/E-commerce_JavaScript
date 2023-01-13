import { productosServices } from "../services/productos-service.js";
const form = document.querySelector('[data-form]');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const name = document.querySelector('[data-nombre]').value;
    const price = document.querySelector('[data-precio]').value;
    const description = document.querySelector('[data-descripcio]').value;
    productosServices.nuevo_Producto(url, name, price, description).then(response => {
        window.location.href = "/assets/screens/registroCompleto.html";
    }).catch(err => console.log(err));
});