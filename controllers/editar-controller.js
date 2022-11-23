import { productosServices } from "../services/productos-service.js";
const formulario = document.querySelector('[data-form]');
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    console.log(url);
    const id = url.searchParams.get("id");
    console.log(id);
    if (id == null){
        //window.location.href = '';
        console.log("Error");
    }
    const urlimagen = document.querySelector('[data-url]');
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');
    try{
        const producto = await productosServices.detalleProducto(id);
        if (producto.nombre){
            urlimagen.value = producto.url;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }
    }catch(error){
        console.log("error catch");
    }
};
obtenerInformacion();
formulario.addEventListener('submit',(event) =>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const urlImagen = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    productosServices.actualizarProducto(urlImagen,nombre,precio,descripcion,id).then(() =>{
        window.location.href='edicionCompleta.html';
        console.log("Edicion satisfactoria");
    });
});