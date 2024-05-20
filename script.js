// script.js

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showInfo(section) {
    var infos = document.querySelectorAll('.info');
    infos.forEach(function(info) {
        info.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
}

// Slideshow
var currentIndex = 0;
var slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach(function(slide, i) {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentIndex);
});