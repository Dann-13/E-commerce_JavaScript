const lista_productos = () => fetch("http://localhost:3000/products").then(response => response.json());
const nuevo_Producto = (newProduct) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
};
const eliminarProducto = (id) => {
    console.log('eliminar a => ', id);
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    })
}
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`).then((respuesta) => respuesta.json())
}
async function updateProduct(productId, updatedProduct) {
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
export async function searchProduct(productName) {
    try {
      const response = await fetch(`http://localhost:3000/products?name_like=${productName}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
export const productosServices = {
    lista_productos,
    nuevo_Producto,
    eliminarProducto,
    detalleProducto,
    updateProduct,
    searchProduct
}