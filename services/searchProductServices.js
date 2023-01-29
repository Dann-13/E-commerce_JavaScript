//listamos los productos en la pagina
const lista_productos = () => fetch("http://localhost:3000/products").then(response => response.json());
//filtramos un producto por categoria
async function searchProduct(category) {
    try {

        const response = await fetch(`http://localhost:3000/products?${category}`);
        const data = await response.json();
        //si la categoria sellecionada es diferente de todos que me enseñe los productos indicados
        if (category != "todos") {
            for (let key in data) {
                if (data[key].category.match(new RegExp(category, 'i'))) {
                    const product = data[key];
                    console.log(product);
                    const productResults = document.querySelector('.product-list');
                    const seccion = document.createElement("div");
                    seccion.classList.add("product-item");
                    productResults.appendChild(seccion);
                    const productos = `
                    <img src="${product.url}" alt="Product 2">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button>Add to cart</button>
                    `
                    seccion.innerHTML = productos;
                }
            }
        } else {//en caso contrario selecciono todos los productos
            console.log("Todos")
            lista_productos().then((data) => {
                data.forEach(product => {
                    const seleccion = document.getElementById("product-list");
                    console.log(product.name);
                    const seccion = document.createElement("div");
                    seccion.classList.add("product-item");
                    const productos =`
                    <img src="${product.url}" alt="Product 2">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="btn-cart">Add to cart</button>
                    `;
                    seccion.innerHTML = productos;
                    seleccion.appendChild(seccion);
                })
            }).catch(err => {
                console.error(err);
            });
        }

    } catch (err) { //Manejo de Errores
        console.log(err);
    }
}


export const productosServices = {
    searchProduct,
    lista_productos
}