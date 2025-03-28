const images = [
];

let currentIndex = 0;

const carouselImg = document.getElementById('carousel-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImg.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImg.src = images[currentIndex];
});
