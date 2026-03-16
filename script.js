// Function for mobile menu placeholder
function initMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            alert('Menu opened (implement drawer logic here).');
        });
    }
}

// Complex Stacked Horizontal Carousel Logic
function initJuiceCarousel() {
    const carousel = document.getElementById('juiceCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active', 'prev', 'next');
            // The magic CSS handles the rest based on these classes
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('prev');
            } else if (index === (currentIndex + 1) % items.length) {
                item.classList.add('next');
            }
        });
    }

    if (carousel && prevBtn && nextBtn) {
        updateCarousel(); // Initial setup

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initJuiceCarousel();
});