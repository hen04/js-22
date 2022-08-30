const prev = document.getElementById("btn-prev"),
			next = document.getElementById("btn-next"),
			slides = document.getElementsByClassName("slide"),
			dots = document.getElementsByClassName("dot");

let index = 0;

// добавляем класс active к видимому слайду
const activeSlider = function (n) {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

// добавляем класс active к точке видимого слайда
const activeDot = function (n) {
	for(dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const currentSlide = function (ind) {
	activeSlider(ind);
	activeDot(ind);
}

// функция для перелистывания следующего слайда
const nextSlide = function() {
	if (index === slides.length - 1) {
		index = 0;
		currentSlide(index);
	} else {
		index++;
		currentSlide(index);
	}
}

// функция для перелистывания предыдущего слайда
const prevSlide = function() {
	if (index === 0) {
		index = slides.length - 1;
		currentSlide(index);
	} else {
		index--;
		currentSlide(index);
	}
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
