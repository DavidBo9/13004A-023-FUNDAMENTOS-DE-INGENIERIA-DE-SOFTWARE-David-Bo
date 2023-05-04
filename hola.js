var slideIndex1 = 1;
showSlides(slideIndex1, 'mySlides1');

var slideIndex2 = 1;
showSlides(slideIndex2, 'mySlides2');

var slideIndex3 = 1;
showSlides(slideIndex2, 'mySlides3');

var slideIndex4 = 1;
showSlides(slideIndex2, 'mySlides4');

var slideIndex5 = 1;
showSlides(slideIndex2, 'mySlides5');

var slideIndex6 = 1;
showSlides(slideIndex2, 'mySlides6');

function plusSlides(n, className) {
  if (className === 'mySlides1') {
    showSlides(slideIndex1 += n, 'mySlides1');
  } else if (className === 'mySlides2') {
    showSlides(slideIndex2 += n, 'mySlides2');
  } else if (className === 'mySlides3') {
    showSlides(slideIndex3 += n, 'mySlides3');
  } else if (className === 'mySlides4') {
    showSlides(slideIndex4 += n, 'mySlides4');
} else if (className === 'mySlides5') {
    showSlides(slideIndex5 += n, 'mySlides5');
} else if (className === 'mySlides6') {
    showSlides(slideIndex6 += n, 'mySlides6');
  }
}

function showSlides(n, className) {
  var i;
  var slides = document.getElementsByClassName(className);
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[n-1].style.display = "block";
  if (className === 'mySlides1') {
    slideIndex1 = n;
  } else if (className === 'mySlides2') {
    slideIndex2 = n;
  } else if (className === 'mySlides3') {
    slideIndex3 = n;
  } else if (className === 'mySlides4') {
    slideIndex4 = n;
  } else if (className === 'mySlides5') {
    slideIndex5 = n;
  } else if (className === 'mySlides6') {
    slideIndex6 = n;
  }
}