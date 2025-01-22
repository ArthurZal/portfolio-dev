let navMenu = document.getElementById('nav-menu');
let navToggle = document.getElementById('nav-toggle');
let navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    });
}

let navLink = document.querySelectorAll('.nav-link');

let linkAction = () => {
    let navMenu =  document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(function(n) {
    n.addEventListener('click', linkAction);
});