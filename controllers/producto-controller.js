import { productosServices } from "../services/productos-service.js";

const crearNuevaSeccion = (nombre, precio, id,imagen) => {
    const seccion = document.createElement("div");
    seccion.classList.add("container");
    const contenido = `
    <div class="imagen">
      <img src="${imagen}" alt="" class="imagen__Producto">
    </div>
    <div class="nombre">
      <p>${nombre}</p>
    </div>
    <div class="precio">
      <p>${precio}</p>
    </div>
    <div class="btn">
      <button class="btns" type="button" id="${id}">Eliminar</button>
      <a href="../screens/editar_cliente.html?id${id}" class="btns">Editar</a>

    </div>
    `
    seccion.innerHTML = contenido;
    const btn = seccion.querySelector("button")
    console.log(btn);
    /* btn.addEventListener("click",() =>{
        const id = btn.id;
        productosServices.eliminarCliente(id).then(respuesta =>{
            console.log(respuesta);
        }).catch(error => {
            alert("Ocurrio un error: ");
        });

    }) */
    return seccion;

}
const table = document.querySelector('[data-productos]');

productosServices.lista_productos().then((data)=>{
    console.log(data);
    data.forEach(({nombre,precio,id,imagen})=>{
        const nuevaLinea = crearNuevaSeccion(nombre,precio,id,imagen);
        table.appendChild(nuevaLinea)
    })
}).catch((error)=> console.log("Ocurrio un error: ",error))