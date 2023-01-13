const lista_productos = () => fetch("http://localhost:3000/products").then(response => response.json());
const nuevo_Producto = (url, name, price, description) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, name, price, description, id: uuid.v4() })
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
async function searchProduct(productName) {
    try {

        const response = await fetch(`http://localhost:3000/products?name_like=${productName}`);
        const data = await response.json();
        if (data.length > 0) {
            //const product = data.find(product => product.name.match(new RegExp(productName, 'i'))); console.log(product);
            for (let key in data) {
                if (data[key].name.match(new RegExp(productName, 'i'))) {
                    const product = data[key];
                    //va lo mio
                    const productResults = document.querySelector('.productos__items');
                    productResults.classList.add("container");
                    const contenido = `
                    <div class="imagen">
                      <img src="${product.url}" alt="" class="imagen__Producto">
                    </div>
                    <div class="nombre">
                        <p>${product.name}</p>
                    </div>
                    <div class="precio">
                        <p>${product.price}</p>
                    </div>
                    <div class="btn">
                        <button class="btns" type="button" id="${product.id}">Eliminar</button>
                        <a href="/editarProducto.html?id=${product.id}" class="btns">Editar</a>

                    </div>
                    `
                    productResults.innerHTML = contenido;
                    

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