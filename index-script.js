const navToogler = document.getElementById('navbar-toogle');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mainLogo = document.getElementById('main-logo');
const indexContactWrapper = document.getElementById('index-contact-wrapper');

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

// Définition du Cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
// Suppression du Cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}
  
// Lecture du Cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
// Définition du Consentement Utilisateur
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}
  
// Ecouteur d'évènement
let cookie_consent = getCookie("user_cookie_consent");
if (cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
} else {
    document.getElementById("cookieNotice").style.display = "block";
}

window.onload = () => {
    mainLogo.setAttribute('class', 'main-logo non-transparent');
    indexContactWrapper.setAttribute('class', 'index-contact-wrapper flex-column flex-lg-row mt-3 non-transparent')
}

navToogler.addEventListener('click', toogleNavbar);