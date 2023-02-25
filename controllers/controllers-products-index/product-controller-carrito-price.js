import { productosServices } from '../../services/productos-service.js';
let cartTotal = 0;
const obtenerInformacion = async () => {
    try {
        const product = await productosServices.detalleProducto("2750b775-0b4e-4d91-80da-790bef6ca87d");
        // Actualizar el total del carrito
        cartTotal += parseFloat(product.price);
        //console.log(cartTotal);

        // Actualizar el HTML para mostrar el total del carrito
        //updateCartTotal();
    } catch (err) {
        console.log(err);
    }
}
obtenerInformacion();
function updateCartTotal() {
    const cartTotalElement = document.querySelector('.product__prices');
    cartTotalElement.textContent = cartTotal;
}