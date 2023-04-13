import { productosServices } from "../services/productos-service.js";
//Funcion que lista los productos
const crearNuevaSeccion = (url, name, price, id) => {
  const seccion = document.createElement("tr");
  seccion.id = "new";
  const contenido = `

      <td class="imgClass"><img src="${url}" alt=""></td>
      <td>${name}</td>
      <td>des</td>
      <td>${price}</td>
      <td class="td__edits"><button class="btn__edit">Editar</button></td>
      <td class="td__edits"><button class="btn__delete">Eliminar</button></td>
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
    data.forEach(({ url, name, price, id }) => {
      const nuevaLinea = crearNuevaSeccion(url, name, price, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrio un error: ", error));
