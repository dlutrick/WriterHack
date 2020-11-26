// Global Variables
let menu = document.getElementById("menu");
let toggleIcon = document.getElementById("toggle_button");

// Dropdown Menu Functionality
const toggleMenu = () => {
  menu.classList.toggle("show_menu");
};

// Toggle Dropdown Menu Icon
const classToggle = () => {
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-times");
};
document.querySelector(".fa-bars").addEventListener("click", classToggle);
