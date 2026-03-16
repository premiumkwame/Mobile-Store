let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('prev');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('next');
        }
    });
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateCarousel();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.carousel')) {
        updateCarousel();
    }
});