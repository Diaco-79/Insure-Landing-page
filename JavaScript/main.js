"use strict";

const menuToggle = document.querySelector(".menu");
const navigationToggle = document.querySelector(".navigation");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navigationToggle.classList.toggle("active");
});
