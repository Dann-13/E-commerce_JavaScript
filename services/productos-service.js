const lista_productos = () => fetch("http://localhost:3000/productos").then(response => response.json());



export const productosServices = {
    lista_productos
}