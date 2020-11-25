// Dropdown Menu Functionality
const toggleMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.toggle("show_menu");
};

const toggleMenuIcon = () => {
  let icon = document.getElementById("toggle_button");
  icon.classList.toggle("fas fa-bars");
  icon.classList.toggle("fas fa-times");
};
