const collapse = document.querySelector(".nav-list");
const navToggle = document.querySelector(".hamburger");

const DisplayNav = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", DisplayNav);
