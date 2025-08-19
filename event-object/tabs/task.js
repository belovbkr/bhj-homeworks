let tabElements = Array.from(document.querySelectorAll('.tab'));
let tabContentElements = Array.from(document.querySelectorAll('.tab__content'));
let h2Element = document.querySelector('h2');

// tabElements.findIndex((element) => element.classList.contains('tab_active'));


tabElements.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        tabElements[tabElements.findIndex((element) => element.classList.contains('tab_active'))].classList.remove('tab_active');
        tabElements[index].classList.add('tab_active');
        h2Element.textContent = tabElements[index].textContent;
        tabContentElements[tabContentElements.findIndex((element) => element.classList.contains('tab__content_active'))].classList.remove('tab__content_active');
        tabContentElements[index].classList.add('tab__content_active');
        
    });
});