const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const navCollection = document.querySelector('.nav-collection');

openMenu.addEventListener('click', () => {
    navCollection.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navCollection.classList.remove('active');
});