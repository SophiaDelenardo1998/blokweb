var button = document.querySelector(".hamburgermenu");
var navigatiebar = document.querySelector(".navigatiebar_hidden");


var span1 = document.querySelector(".hamburgermenu span:nth-of-type(1)");
var span2 = document.querySelector(".hamburgermenu span:nth-of-type(2)");

function uitklappen(){
  navigatiebar.classList.toggle("uitklappenMenu");
  span1.classList.toggle("rotate1");
  span2.classList.toggle("rotate2");
}

button.addEventListener("click", uitklappen);


var blok1 = document.querySelector("section ul li:nth-of-type(1)");
function selectblok1 (){
  blok1.classList.toggle("selecteren");
}

blok1.addEventListener("click",selectblok1);

var blok2 = document.querySelector("section ul li:nth-of-type(2)");
function selectblok2 (){
  blok2.classList.toggle("selecteren");
}

blok2.addEventListener("click",selectblok2);

var blok3 = document.querySelector("section ul li:nth-of-type(3)");
function selectblok3 (){
  blok3.classList.toggle("selecteren");
}

blok3.addEventListener("click",selectblok3);


var blok4 = document.querySelector("section ul li:nth-of-type(4)");
function selectblok4 (){
  blok4.classList.toggle("selecteren");
}

blok4.addEventListener("click",selectblok4);


var blok5 = document.querySelector("section ul li:nth-of-type(5)");
function selectblok5 (){
  blok5.classList.toggle("selecteren");
}

blok5.addEventListener("click",selectblok5);

var blok6 = document.querySelector("section ul li:nth-of-type(6)");
function selectblok6 (){
  blok6.classList.toggle("selecteren");
}

blok6.addEventListener("click",selectblok6);


var blok7 = document.querySelector("section ul li:nth-of-type(7)");
function selectblok7 (){
  blok7.classList.toggle("selecteren");
}

blok7.addEventListener("click",selectblok7);
