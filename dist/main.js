const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");
button.addEventListener("click", () => {
  menu.classList.toggle("show");
});
