const smoothScroll = require('./smoothScroll');
const links = document.querySelectorAll('.header__nav-link');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        console.log(e.target.dataset.href);
        smoothScroll(e.target.dataset.href)
    });
});
