"use strict";

const btns = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".image");
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const userName = document.getElementById("name");
const accountName = document.querySelector(".page-name");

const btnAnimation = function (e) {
  e.preventDefault();
  const button = e.target;
  button.classList.toggle("btn-hover");
};

for (const btn of btns) {
  btn.addEventListener("click", btnAnimation);
}

const imgAnimation = function (e) {
  const image = e.target;
  image.classList.toggle("image-hover");
};

for (const img of imgs) {
  img.addEventListener("click", imgAnimation);
}
