// console.log("hello world");
"use strict";

//Target-->
//card-->
const card = document.querySelector(".card");
const closeContent = document.querySelectorAll(".exit");
// console.log(closeContent);
const exits = [...closeContent];
// console.log(exits);
//buttons-->
const btn = document.querySelectorAll(".btn");
const buttons = [...btn];
// console.log(buttons[0]);
//hidden-box-->
const hidden = document.querySelectorAll(".hidden-content");
const hiddenBoxs = [...hidden];
// console.log(hiddenBoxs);

//Event function-->
const openBox = function (e) {
    e.preventDefault();
  console.log(e.originalTarget === buttons[0]);
  for (let i = 0; i < buttons.length; i++) {
    if (e.originalTarget === buttons[i]) {
      hiddenBoxs[i].classList.remove("hidden");
      card.classList.add("hidden");
    } else {
      hiddenBoxs[i].classList.add("hidden");
    }
  }
};

//2nd function-->
const closeBox = function (e) {
  e.preventDefault();
  console.log(e.originalTarget === exits[0]);
  //   console.log("hello");
  for (let i = 0; i < exits.length; i++) {
    if (e.originalTarget === exits[i]) {
      hiddenBoxs[i].classList.add("hidden");
      card.classList.remove("hidden");
    }
  }
};
//Event-->
for (const button of buttons) {
  button.addEventListener("click", openBox);
  //for mobile screen-->
  button.addEventListener("touchstart", openBox);
}

for (const exit of exits) {
  exit.addEventListener("click", closeBox);
  //for mobile screen-->
  exit.addEventListener("touchstart", closeBox);
}
