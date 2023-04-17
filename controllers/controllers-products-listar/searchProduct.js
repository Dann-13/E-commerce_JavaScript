import { searchProduct } from "../../services/productos-service.js";

export function searchProductByName() {
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
      renderProducts(productName);
    } else {
      console.log("No puede estar vacio");
    }
  });
}

async function renderProducts(productName) {
  const products = await searchProduct(productName);
  if (products.length > 0) {
    for (let key in products) {
      if (products[key].name.match(new RegExp(productName, 'i'))) {
        const product = products[key];
        const table = document.querySelector('.productos__item');
        const seccion = document.createElement("tr");
        const contenido = `
          <td class="imgClass"><img src="${product.url}" alt="imagen Producto"></td>
          <td class="name__product">${product.name}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td class="td__edits">
            <a href="/assets/screens/editarProducto.html?id=${product.id}"class="btn__edit">Editar</a>
          </td>
          <td class="td__edits"><button class="btn__delete" id="${product.id}">Eliminar</button></td>
        `;
        seccion.innerHTML = contenido;
        table.appendChild(seccion);
      }
    }
  } else {
    console.log("No se encontro Producto");
  }
}
