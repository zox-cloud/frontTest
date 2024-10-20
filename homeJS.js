let currentSlideIndex = 0;

function addClothes() {
    // Hide the empty state and show the slider
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('slider').style.display = 'block';
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

// Initial setup to show the first slide if the slider is displayed
if (document.getElementById('slider').style.display === 'block') {
    showSlide(currentSlideIndex);
}
