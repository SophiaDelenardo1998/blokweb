var button = document.querySelector(".hamburgermenu");
function uitklappen(){
  let navigatiebar= document.querySelector(".navigatiebar_hidden");

  navigatiebar.classList.toggle("uitklappenMenu");
}

button.addEventListener("click", uitklappen);
