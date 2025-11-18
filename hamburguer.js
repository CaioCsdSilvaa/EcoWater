const hamburger = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

function openMenu() {
    hamburger.classList.add('active');
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMenu() {
    const isActive = menu.classList.contains('active');
    if (isActive) {
        closeMenu();
    } else {
        openMenu();
    }
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});