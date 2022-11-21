import { productosServices } from "../services/productos-service.js";

const crearNuevaSeccion = (nombre, precio, id) => {
    const seccion = document.createElement("tr");
    const contenido = `
    <td class="td" data-td="">imagen</td>
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html?id${id}"
                    class="btn_table">Editar</a>
            </li>
            <li>
                <button class="btn_table" type="button"
                    id="${id}">
                    Eliminar
                </button>
            </li>
        </ul>
    </td>
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
const table = document.querySelector('[data-table]');

productosServices.lista_productos().then((data)=>{
    console.log(data);
    data.forEach(({nombre,precio,id})=>{
        const nuevaLinea = crearNuevaSeccion(nombre,precio,id);
        table.appendChild(nuevaLinea)
    })
}).catch((error)=> console.log("Ocurrio un error: ",error))