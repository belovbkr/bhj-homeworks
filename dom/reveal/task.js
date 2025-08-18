let revealElement = Array.from(document.querySelectorAll('.reveal'));

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
        el.classList.add('reveal_active');
    } else {
        el.classList.remove('reveal_active');
    }
}

window.addEventListener('scroll', function() {
    revealElement.forEach((element) => {
        isVisible(element);
    });
});
