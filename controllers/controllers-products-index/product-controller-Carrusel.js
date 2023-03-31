import { productosServices } from '../../services/productos-service.js';
const slider = $('.slider');
const obtenerInformacion = async () => {
    try {
        const products = await productosServices.lista_productos();
        console.log(products)
        let imagen = '';
        for (let i = 0; i < products.length; i++) {
            imagen += '<div class="product-item"><img src="' 
            + products[i].url + '"><h3>' 
            + products[i].name + '</h3><p>' 
            + products[i].description + '</p><p>$' 
            + products[i].price + '</p></div>';
        }
        slider.html(imagen);

        // inicializa el carrusel con Slick
        slider.slick({
            slidesToShow: 3, // muestra 3 imágenes a la vez
            autoplay: true, // inicia la animación automáticamente
            autoplaySpeed: 1000, // velocidad de cambio de imagen (2 segundos)
            speed: 1500, // velocidad de animación (1 segundo)
            infinite: true, // permite recorrer el carrusel de forma infinita
            arrows: false, // oculta las flechas de navegación
            dots: false, // oculta los puntos de navegación
            responsive: [
                {
                    breakpoint: 768, // cambia la configuración cuando la pantalla es menor a 768px
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480, // cambia la configuración cuando la pantalla es menor a 480px
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    } catch (err) {
        console.log(err);

    }
}
obtenerInformacion();
