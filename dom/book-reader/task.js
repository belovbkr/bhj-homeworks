let fontElement = Array.from(document.querySelectorAll('.font-size'));
let contentElement = Array.from(document.querySelectorAll('p'));

fontElement.forEach((element, index) => {
    element.onclick = function() {
        fontElement[index].classList.toggle('font-size_active');
        if (fontElement[index].classList.contains('font-size_small')) {
            contentElement.forEach((book) => {
                book.classList.toggle('book_fs-small');
                book.classList.remove('book_fs-big');
            });

        }

        if (fontElement[index].classList.contains('font-size_big')) {
            contentElement.forEach((book) => {
                book.classList.toggle('book_fs-big');
                book.classList.remove('book_fs-small');
            });
        }
        
        return false;
    }
});
