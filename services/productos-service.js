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


export const productosServices = {
    lista_productos,
    nuevo_Producto
}