document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize a carousel by ID
    function setupCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

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

        // Touch support for mobile
        let startX = 0;
        carousel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        carousel.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                currentIndex = (currentIndex + 1) % items.length;
            } else if (endX - startX > 50) {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
            }
            updateCarousel();
        });

        updateCarousel(); // Initialize
    }

    // Initialize both specific carousels
    setupCarousel('juiceCarousel');
    setupCarousel('pastriesCarousel');

 // Footer
 // Dynamic Year
 document.getElementById('year').textContent = new Date().getFullYear();
});