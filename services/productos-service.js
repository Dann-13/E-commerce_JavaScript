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
//funcion que busca un producto por su nombre y lo lista en la pagina de listar producto
async function searchProduct(productName) {
    try {

        const response = await fetch(`http://localhost:3000/products?name_like=${productName}`);
        const data = await response.json();
        if (data.length > 0) {
            for (let key in data) {
                if (data[key].name.match(new RegExp(productName, 'i'))) {
                    const product = data[key];
                    
                    const table = document.querySelector('.productos__item');
                    const seccion = document.createElement("tr");
                    const contenido = `
                    <td class="imgClass"><img src="${product.url}" alt="imagen Producto"></td>
                    <td class="name__product">${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td class="td__edits">
                      <a href="/assets/screens/editarProducto.html?id=${product.id}"class="btn__edit">Editar</a>
                    </td>
                    <td class="td__edits"><button class="btn__delete" id="${product.id}">Eliminar</button></td>
                `;
                seccion.innerHTML = contenido;
                table.appendChild(seccion);

                }
            }
        } else {
            console.log("No se encontro Producto");
        }
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