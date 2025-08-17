let  valueElement = document.querySelector('.dropdown__value');
let  listElement = document.querySelector('.dropdown__list');
let itemElement = Array.from(document.querySelectorAll('.dropdown__item'));
let linkElement = Array.from(document.querySelectorAll('.dropdown__link'));

function onList() {
    listElement.classList.toggle('dropdown__list_active');
}

valueElement.addEventListener('click', onList);

linkElement.forEach((item, index) => {
    item.onclick = function() {
        valueElement.textContent = linkElement[index].textContent;
        onList();
        
        return false;
    }
});

// linkElement.forEach((item, index) => {
//     item.addEventListener('click', function() {
//         alert(linkElement[index].textContent);
//     });
// });