const header = document.querySelector('.header');
const headerHeight = header.scrollHeight;
window.addEventListener('scroll', function() {
    if (window.scrollY >= headerHeight) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});
