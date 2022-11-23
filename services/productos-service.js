const lista_productos = () => fetch("http://localhost:3000/productos").then(response => response.json());
const nuevo_Producto = (url, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, nombre, precio, descripcion, id: uuid.v4() })
    })
};
const eliminarProducto = (id) =>{
    console.log('eliminar a => ', id);
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    })
}
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());s
}

export const productosServices = {
    lista_productos,
    nuevo_Producto,
    eliminarProducto,
    detalleProducto
}