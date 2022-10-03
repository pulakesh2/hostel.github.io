"use strict";

//USER NAME-->
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = [firstName, lastName];

const email = document.getElementById("email");

//Batch-->
const batch = document.getElementById("batch-year");

//Phone Number-->
const phoneNumber = document.getElementById("phone-number");

//SUBMIT-->
const submit = document.querySelector(".submit");
// const validName = Number(firstName.value);

//display message-->
const message = document.querySelector(".message");

//remove hidden-->
const messageDelete = function () {
  message.classList.add("hidden");
};

//eventcall-->
let eventCall = 0;
// console.log(message);

//for first Name-->
const onlyTextFirst = function (e) {
  //prevent Default-->
  // e.preventDefault();

  //get user Input-->
  const strings = firstName.value;

  //create an empty string-->
  const newStrings = [];

  //convert user value to string and store it-->
  for (const string of strings) {
    newStrings.push(Number(string));
  }

  //define a counter variable-->
  let counter = 0;

  //find if there is any number in the string or not-->
  for (let i = 0; i < 10; i++) {
    if (newStrings.includes(i)) {
      counter++;
    }
  }

  //display result-->
  if (counter !== 0) {
    console.log("having number");
    message.classList.remove("hidden");

    message.innerHTML = `<h1>Please type a valid name</h1>`;
    setTimeout(messageDelete, 3000);
    firstName.value = "";
    eventCall++;
  }

  //if there is input lesser than 3 character-->
  if (firstName.value.length < 3) {
    console.log("invalid");
    message.classList.remove("hidden");

    message.innerHTML = `<h1>Please type a valid name</h1>`;
    setTimeout(messageDelete, 3000);
    firstName.value = "";
    eventCall++;
  }
};

//for Last Name-->
const onlyTextLast = function (e) {
  //prevent Default-->
  // e.preventDefault();

  //get user Input-->
  const strings = lastName.value;

  //create an empty string-->
  const newStrings = [];

  //convert user value to string and store it-->
  for (const string of strings) {
    newStrings.push(Number(string));
  }

  //define a counter variable-->
  let counter = 0;

  //find if there is any number in the string or not-->
  for (let i = 0; i < 10; i++) {
    if (newStrings.includes(i)) {
      counter++;
    }
  }

  //display result-->
  if (counter !== 0) {
    message.classList.remove("hidden");

    console.log("having number");

    message.innerHTML = `<h1>Please type a valid name</h1>`;
    setTimeout(messageDelete, 3000);
    lastName.value = "";
    eventCall++;
  }

  //if there is input lesser than 3 character-->
  if (lastName.value.length < 3) {
    message.classList.remove("hidden");

    console.log("invalid");
    message.innerHTML = `<h1>Please type a valid name</h1>`;

    setTimeout(messageDelete, 3000);
    lastName.value = "";
    eventCall++;
  }
};

const emailVerification = function () {
  //   console.log(email.value.endsWith("@gmail.com"));
  if (email.value.length < 4 || !email.value.endsWith("@gmail.com")) {
    console.log("invalid email");
    message.classList.remove("hidden");

    message.innerHTML = `<h1>Please enter a valid email(xy@gmail.com)</h1>`;

    setTimeout(messageDelete, 3000);
    email.value = "";
    eventCall++;
  }
};

const batchVerification = function () {
  //   console.log(batch.value);

  //taking value-->
  const batchArr = [...batch.value];
  //create empty array-->
  const newBatch = [];

  //convert string to number and store it to the new array-->
  for (const num of batchArr) {
    newBatch.push(Number(num));
  }

  //   console.log(newBatch);

  //Validation-->
  if (
    batch.value.length !== 4 ||
    batch.value < 1963 ||
    batch.value > 2021 ||
    newBatch.includes(NaN)
  ) {
    console.log("invalid batch");
    message.classList.remove("hidden");

    message.innerHTML = `<h1>Please type between 1963 and 2021</h1>`;
    batch.value = "";
    setTimeout(messageDelete, 3000);
    batch.value = "";
    eventCall++;
  }
};

const phoneNumberVerification = function () {
  if (phoneNumber.value.length !== 10) {
    console.log("invalid number");
    message.classList.remove("hidden");

    message.innerHTML = `<h1>Phone number should be 10 digits</h1>`;

    setTimeout(messageDelete, 3000);
    eventCall++;
  }
};

const goToPage = function (e) {
  if (eventCall != 0) {
    e.preventDefault();
    eventCall = 0;
  }
};

const formEvent = [
  onlyTextFirst,
  onlyTextLast,
  emailVerification,
  batchVerification,
  phoneNumberVerification,
  goToPage,
];
// submit.addEventListener("click", onlyTextFirst);
// submit.addEventListener("click", onlyTextLast);
// submit.addEventListener("click", emailVerification);
// submit.addEventListener("click", batchVerification);
// submit.addEventListener("click", phoneNumberVerification);

for (const event of formEvent) {
  submit.addEventListener("click", event);
}
