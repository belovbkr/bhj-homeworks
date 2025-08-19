let fontElement = Array.from(document.querySelectorAll('.font-size'));
let contentElement = document.querySelector('.book__content');

// fontElement.findIndex((element) => element.classList.contains('font-size_active'));

fontElement.forEach((element,index) => {
    element.onclick = function() {
        fontElement[fontElement.findIndex((element) => element.classList.contains('font-size_active'))].classList.remove('font-size_active');
        fontElement[index].classList.toggle('font-size_active');

        contentElement.classList.remove('book_fs-small', 'book_fs-big');
        // contentElement.classList.remove('book_fs-big');

        if (fontElement[index].classList.contains('font-size_small')) {
            contentElement.classList.add('book_fs-small');
        }

        if (fontElement[index].classList.contains('font-size_big')) {
            contentElement.classList.add('book_fs-big');
        }

        return false;
    }
});

// fontElement.forEach((element, index) => {
//     element.onclick = function() {
//         fontElement[index].classList.toggle('font-size_active');
//         if (fontElement[index].classList.contains('font-size_small')) {
//             contentElement.forEach((book) => {
//                 book.classList.toggle('book_fs-small');
//                 book.classList.remove('book_fs-big');
//             });

//         }

//         if (fontElement[index].classList.contains('font-size_big')) {
//             contentElement.forEach((book) => {
//                 book.classList.toggle('book_fs-big');
//                 book.classList.remove('book_fs-small');
//             });
//         }
        
//         return false;
//     }
// });
