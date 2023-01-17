import { productosServices } from "../services/productos-service.js";

const form = document.getElementById("search-product-form");
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const productName = form.elements.name.value;
    console.log(productName);
    if(productName != ""){
        let mySection = document.getElementById("mySection");
        while (mySection.firstChild) {
            mySection.removeChild(mySection.firstChild);
        }
        productosServices.searchProduct(productName);
    }else{
        console.log("No puede estar vacio");
    }
});