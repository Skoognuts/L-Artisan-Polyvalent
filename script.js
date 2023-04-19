const navToogler = document.getElementById('navbar-toogle');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

// Gestion de la Navbar latérale
function toogleNavbar() {
    if (menu.offsetWidth == "0") {
        menu.style.width = "400px";
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    } else {
        menu.style.width = "0";
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
    }
}
  
// Ecouteur d'évènement
navToogler.addEventListener('click', toogleNavbar);