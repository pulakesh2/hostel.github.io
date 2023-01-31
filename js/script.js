"use strict";

const nav = document.querySelector(".nav-content");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const navHeight = nav.getBoundingClientRect().height;
const mainContainer = document.querySelector(".main-container");
//smooth scrolling
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      document.querySelector(".section").style.paddingTop = navHeight;
    }
  });
//menu fade out
const handleHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".nav-content")
      .querySelectorAll(".main-nav-link");
    const logo = link.closest(".nav-content").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    if (mainContainer.classList.contains("nav-hide")) {
      nav.classList.remove("sticky");
      mainContainer.classList.add("nav-show");
    }
    if (mainContainer.classList.contains("nav-show")) {
      header.classList.remove("nav-open");
    }
  } else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
// mobile navigation
const btnNav = document.querySelector(".btn-mobile-nav");
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  document.querySelector(".main-container").classList.toggle("nav-hide");
});
// document.querySelector(".");
console.log(document.querySelector(".main-container"));
if (mainContainer.classList.contains("nav-show")) {
  header.classList.add("nav-hide");
}
