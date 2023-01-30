import { productosServices } from '../../services/productos-service.js';
const container = document.getElementById('product-list');
container.addEventListener('click', event =>{
    if (event.target.matches('.get-product')){
        const productId = event.target.getAttribute('data-product-id');
        console.log(productId);
    }
});

/* const obtenerInformacion = async () => {
    const id = "2750b775-0b4e-4d91-80da-790bef6ca87d"
    try{

        
        const product = await productosServices.detalleProducto(id);
        console.log(product);
        
    }catch(err){
        console.log(err);
    }
}
obtenerInformacion();
 */