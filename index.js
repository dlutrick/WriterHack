// Dropdown Menu Functionality
const toggleMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.toggle("show_menu");
};

// Toggle Dropdown Menu Icon
const classToggle = () => {
  document.getElementById("toggle_button").classList.toggle("fa-bars");
  document.getElementById("toggle_button").classList.toggle("fa-times");
};
document.querySelector(".fa-bars").addEventListener("click", classToggle);
