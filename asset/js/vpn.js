const collapse = document.querySelector(".nav_list");
const navToggle = document.querySelector(".hamburger");

const Fabulous = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", Fabulous);
