/**
 * Created by GL552JX on 11/2/2016.
 */

var slideIndex = 0;

function nextSlide() {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    slideIndex += 1;
    showSlide(slideIndex);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' slideNext' || ' slidePrev', '');
        //slides[i].className = slides[i].className.replace(' slidePrev', '');
    }
    slides[slideIndex-1].className += ' slideNext';
}

function prevSlide() {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    slideIndex += -1;
    showSlide(slideIndex);
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' slideNext' || ' slidePrev', '');
        //slides[i].className = slides[i].className.replace(' slidePrev', '');
    }
    slides[slideIndex-1].className += ' slidePrev';
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function changeSlide(n) {
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' slideNext' || 'slidePrev', '');

    }
    showSlide(slideIndex);
    setTimeout(changeSlide, 3500);
}

changeSlide();

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].className = slides[i].className.replace(' slideNext' || 'slidePrev', '');
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}