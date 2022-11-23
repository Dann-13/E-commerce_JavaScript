
const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    correo = document.querySelector('[data-email]').value;
    pass = document.querySelector('[data-pass]').value;
    if (correo === "1@gmail.com" && pass === "123"){
        window.location.href = "lista_productos.html";
    }else{
        alert("Correo o Contraseña incorrectas")
    }
});
