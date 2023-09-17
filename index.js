document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach((item) => {
            item.classList.toggle('toggled');
        });
    });
});