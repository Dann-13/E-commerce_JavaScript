import { uniqueItems } from '../../../../controllers/controllers-products-index/product-controller-carrito.js'
var modal = document.getElementById("myModal");
var btn = document.getElementById("btnModal");
var span = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName("body")[0];

btn.onclick = function () {
  if (uniqueItems.size > 0) {
    modal.style.display = "block";
    modal.style.opacity = "1";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";

    console.log(uniqueItems);
  } else {

    function showAlert() {
      alertify.message('Este es un mensaje');
      alertify
        .alert("Alerta!", "Tienes que tener al menos un producto en el carrito!.", function () {
          alertify.message("Lo Hare");
        }).set('label', 'Ok :3');
    }
    showAlert();

  }
}

span.onclick = function () {
  modal.style.display = "none";

  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
}

