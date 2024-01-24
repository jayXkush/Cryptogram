'use strict';
var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var tet=document.getElementById("tether");
var sol=document.getElementById("solana");
var bnb=document.getElementById("bnb");
var xrp=document.getElementById("xrp");
var car=document.getElementById("cardano");
var ava=document.getElementById("avalanche");




var settings= {
  "async": true,
  "scrossDomain":true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Ctether%2Csolana&vs_currencies=inr&include_market_cap=true&include_24hr_vol=true","method":"GET",
  "headers":{}
}
$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.inr;
  eth.innerHTML = response.ethereum.inr;
  tet.innerHTML = response.tether.inr;
  sol.innerHTML = response.solana.inr;
  bnb.innerHTML = response.bnb.inr;
  xrp.innerHTML = response.xrp.inr;
  car.innerHTML = response.cardano.inr;
  ava.innerHTML = response.avalanche.inr;

})

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}





const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);





const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);





const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);




const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);