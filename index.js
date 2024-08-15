const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navCollection = document.querySelector('.nav-collection');

openMenu.addEventListener('click', () => {
    navCollection.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navCollection.classList.remove('active');
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Automatic slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds
