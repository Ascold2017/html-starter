'use strict';


let hamburger = document.querySelector('#hamburger'),
    navFullscreen = document.querySelector('#mobile-menu');

//Toggling active class in menu and hamburger
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--open');
    navFullscreen.classList.toggle('mobile-menu--active');
});

document.querySelectorAll('.mobile-menu__link').forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('hamburger--open');
        navFullscreen.classList.remove('mobile-menu--active');
    })
})
