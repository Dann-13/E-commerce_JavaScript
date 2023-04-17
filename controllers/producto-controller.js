import { productosServices } from "../services/productos-service.js";
//Funcion que lista los productos en la pagina lista_productos
const crearNuevaSeccion = (url, name, description, price, id) => {
  const seccion = document.createElement("tr");
  seccion.id = "mySection";
  const contenido = `

      <td class="imgClass"><img src="${url}" alt=""></td>
      <td class="name__product">${name}</td>
      <td>${description}</td>
      <td>${price}</td>
      <td class="td__edits">
        <a href="/assets/screens/editarProducto.html?id=${id}"class="btn__edit">Editar</a>
      </td>
      <td class="td__edits"><button class="btn__delete" id="${id}">Eliminar</button></td>
  `;
  seccion.innerHTML = contenido;
  const btn = seccion.querySelector("button");
  btn.addEventListener("click", (event) => {
    const id = btn.id;
    console.log(btn, id);
    productosServices
      .eliminarProducto(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  });

  return seccion;
};
const table = document.querySelector("[data-productos]");

productosServices
  .lista_productos()
  .then((data) => {
    //console.log(data);
    data.forEach(({ url, name, description, price, id }) => {
      const nuevaLinea = crearNuevaSeccion(url, name, description, price, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrio un error: ", error));
