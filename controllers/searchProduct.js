import { productosServices } from "../services/productos-service.js";
//Obtenemos el nombre del producto del input buscador de la pagina buscar producto
const form = document.getElementById("search-product-form");
const input = document.getElementById('buscador');
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const productName = input.value;
    console.log(productName);
    if(productName != ""){
        let mySection = document.querySelector(".productos__item");
        console.log(mySection);
        while (mySection.firstChild) {
            mySection.removeChild(mySection.firstChild);
        }
        productosServices.searchProduct(productName);
    }else{
        console.log("No puede estar vacio");
    }
});