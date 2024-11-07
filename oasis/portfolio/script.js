
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.left');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });
});
