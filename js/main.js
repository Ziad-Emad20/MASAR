//! This function Change background Navigation and fixed Navigation 
function changeNav() {
    var navbar = document.querySelector('#navbar');
    var navbarResponsive = document.querySelector('#navbarSmall');
    var scrollValue = window.scrollY;
    if (scrollValue < 10) {
        navbar.classList.remove('fixed-top')
        navbarResponsive.classList.remove('fixed-top')
        navbar.style.cssText = "background-color: var(--backGroundNavMiddel)"
        // navbarResponsive.style.cssText = "background-color: var(--backGroundNavMiddel)"
    }
    else {
        navbar.classList.add('fixed-top')
        navbarResponsive.classList.add('fixed-top')
        navbar.style.cssText = "background-color: var(--backGroundNavTop)"
        // navbarResponsive.style.cssText = "background-color: var(--backGroundNavTop)"
    }
}
window.addEventListener('scroll', changeNav)
// ! Side nav
let openSide = document.querySelector('#openSide');
let closeSide = document.querySelector('#closeSide');
openSide.addEventListener('click', function () {
    sideNav.style.cssText = "transform: translateX(0)";
});
closeSide.addEventListener('click', function () {
    sideNav.style.cssText = "transform: translateX(-100%)";
});

// // navTaps
// // Initialization for ES Users
// import { Tab, initMDB } from "mdb-ui-kit";

// initMDB({ Tab });

// //form
// // Initialization for ES Users
// import { Input, initMDB } from "mdb-ui-kit";

// initMDB({ Input });