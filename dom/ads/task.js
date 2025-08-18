let rotator__caseElement = Array.from(document.querySelectorAll('.rotator__case'));

function changeRotatorAll() {
    rotator__caseElement.forEach((element, index) => changeRotator(element, index));
}

function changeRotator(el, i) {
    el[i].classList.remove('rotator__case_active');
    el[i + 1].classList.remove('rotator__case_active');
}

setInterval(changeRotatorAll(), 1000);
