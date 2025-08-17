let tabElements = Array.from(document.querySelectorAll('.tab'));
let tabContentElements = Array.from(document.querySelectorAll('.tab__content'));
let h2Element = document.querySelector('h2');


tabElements.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        tabElements[index].classList.add('tab_active');
        // tabElements[tabElements.idexOf(tabElements.classList.contains('tab_active'))].classList.toggle('tab_active');
        tabContentElements[index].classList.add('tab__content_active');
        h2Element.textContent = tabElements[index].textContent;
    });
});