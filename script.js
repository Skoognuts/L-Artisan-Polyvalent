const navToogler = document.getElementById('navbar-toogle');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const topButton = document.getElementById('top-button');

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

// Gestion du scroll
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE & Opera
}
  
// Ecouteur d'évènement
navToogler.addEventListener('click', toogleNavbar);
window.onscroll = function() {scrollFunction()};
topButton.addEventListener('click', topFunction);