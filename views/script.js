const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let images = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        images = data.images;
        showSlide(currentIndex);
    })
    .catch(error => console.error('Erro ao carregar dados do JSON:', error));

function showSlide(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }

    slide.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});