const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");

menuButton.addEventListener("click", function() {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
    
  } else {
    menuList.style.display = "none";
  }
});

const opcionesButton = document.getElementById("opcionesButton");
const opcionesList = document.getElementById("opcionesList");

opcionesButton.addEventListener("click", function() {
  opcionesList.classList.toggle("active");
});

