// JavaScript Document
var uitklappen = document.querySelector("header nav ul li span");
var inklappen = document.querySelector("header nav ul li span");
var body = document.querySelector("body");

var navigatieBar = document.querySelector(".dropdownmenu");

uitklappen.addEventListener("click", klapuit);
inklappen.addEventListener("dblclick", klapin);

function klapuit() {
  navigatieBar.classList.add("dropdownmenu.visible");
  body.classList.add("overflow");
}

function klapin() {
  navigatieBar.classList.remove(".dropdownmenu.visible");
  body.classList.remove("overflow");
}
