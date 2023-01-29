import { productosServices } from "../../services/searchProductServices.js";
const options = document.getElementById("select-option");
options.addEventListener("change", function(){
    const selectedValue = this.value;
    let seccion = document.getElementById("product-list");
    while (seccion.firstChild) {
        seccion.removeChild(seccion.firstChild);
    }
    productosServices.searchProduct(selectedValue);
})
