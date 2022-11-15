"use strict";

const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const headerSection = document.querySelector(".header-section");

const openMenu = function () {
  if (headerSection.className === "header-section nav-mobile") {
    headerSection.classList.remove("nav-mobile");
  } else {
    headerSection.className += " nav-mobile";
  }
};

openMenu();
console.log(headerSection.className);

const navMobile = [openNav, closeNav];

for (const event of navMobile) {
  event.addEventListener("click", openMenu);
}
