import { estan } from '../../../../controllers/controllers-products-index/product-controller-carrito.js'



var modal = document.getElementById("myModal");
var btn = document.getElementById("btnModal");
var span = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName("body")[0];

btn.onclick = function () {
  if(estan.length > 0){
    modal.style.display = "block";
    modal.style.opacity = "1";
  
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  
    console.log(estan.length);
  }else{
    console.log("No hay nadas");
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

