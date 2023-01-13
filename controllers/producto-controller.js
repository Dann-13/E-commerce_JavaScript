import { productosServices } from "../services/productos-service.js";

const crearNuevaSeccion = (url, name, price,id) => {
    const seccion = document.createElement("div");
    seccion.classList.add("container");
    seccion.id="new";
    const contenido = `
    <div class="imagen">
      <img src="${url}" alt="" class="imagen__Producto">
    </div>
    <div class="nombre">
      <p>${name}</p>
    </div>
    <div class="precio">
      <p>${price}</p>
    </div>
    <div class="btn">
      <button class="btns" type="button" id="${id}">Eliminar</button>
      <a href="/assets/screens/editarProducto.html?id=${id}" class="btns">Editar</a>

    </div>
    `
    seccion.innerHTML = contenido;
    const btn = seccion.querySelector("button");
    btn.addEventListener("click", (event) => {
      const id = btn.id;
      console.log(btn ,id);
      productosServices.eliminarProducto(id).then((response) =>{
        console.log(response);
        
      }).catch(error => console.log(error));
    });

    return seccion;

}
const table = document.querySelector('[data-productos]');

productosServices.lista_productos().then((data)=>{
    //console.log(data);
    data.forEach(({url, name, price,id})=>{
        const nuevaLinea = crearNuevaSeccion(url,name,price,id);
        table.appendChild(nuevaLinea)
    })
}).catch((error)=> console.log("Ocurrio un error: ",error))