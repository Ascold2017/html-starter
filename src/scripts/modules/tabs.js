const tabs = document.querySelectorAll('.opportunities__tabs-item');
const slides = document.querySelectorAll('.opportunities__tabs-slide');

tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('opportunities__tabs-item--active'))
        slides.forEach(slide => slide.classList.remove('opportunities__tabs-slide--active'))
    
        tabs[index].classList.add('opportunities__tabs-item--active')
        slides[index].classList.add('opportunities__tabs-slide--active')
    })
})