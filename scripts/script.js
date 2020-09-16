// JavaScript Document
var uitklappen = document.querySelector("header nav ul li img");
var inklappen = document.querySelector(".navigatiebar_hidden img");
var body = document.querySelector("body");

var navigatieBar = document.querySelector(".navigatiebar_hidden");

uitklappen.addEventListener("click", klapuit);
inklappen.addEventListener("click", klapin);

function klapuit() {
  navigatieBar.classList.add("shownavigatie");
  body.classList.add("overflow");
}

function klapin() {
  navigatieBar.classList.remove("shownavigatie");
  body.classList.remove("overflow");
}
