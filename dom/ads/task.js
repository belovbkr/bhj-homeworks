let rotator__caseElement = Array.from(document.querySelectorAll('.rotator__case'));

let currentRotatorActive = rotator__caseElement[rotator__caseElement.findIndex((element) => element.classList.contains('rotator__case_active'))];
setInterval(() => {
    currentRotatorActive.classList.remove('rotator__case_active');
    if (currentRotatorActive.nextElementSibling != null) {
        currentRotatorActive = currentRotatorActive.nextElementSibling
    } else {
        currentRotatorActive = document.querySelector('.rotator').firstElementChild;
    }
    currentRotatorActive.classList.add('rotator__case_active');
}, 1000);

// function changeRotatorAll() {
//     rotator__caseElement.forEach((element, index) => changeRotator(element, index));
// }

// function changeRotator(el, i) {
//     el[i].classList.remove('rotator__case_active');
//     el[i + 1].classList.remove('rotator__case_active');
// }

// setInterval(changeRotatorAll(), 1000);
