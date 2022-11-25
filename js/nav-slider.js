"use strict";

const headerEl = document.querySelector(".header-section");
const zigZagEl = document.querySelector(".zig-zag");

// console.log(descriptionEl);
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.remove("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-8px",
  }
);

observer.observe(zigZagEl);
