import { productosServices } from "../services/productos-service.js";
import {Product} from "../models/product.js";
const form = document.querySelector('[data-form]');
//Recogemos la informacion del producto del formulario, creamos un nuevo producto y lo enviamos al
//Archivo de product services 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const name = document.querySelector('[data-nombre]').value;
    const price = document.querySelector('[data-precio]').value;
    const description = document.querySelector('[data-descripcion]').value;
    const category = document.querySelector('[data-options]').value;
    const newProduct = new Product(url, name, price, description, category);
    productosServices.nuevo_Producto(newProduct).then(response => {
        window.location.href = "/assets/screens/registroCompleto.html";
    }).catch(err => console.log(err));
});