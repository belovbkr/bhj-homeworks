let clickerElement = document.getElementById("clicker__counter");
let cookieElement = document.getElementById("cookie");
cookieElement.onclick = function() {
    clickerElement.textContent++;
    if (cookieElement.width === 200) {
        cookieElement.width = 250;
    } else {
        cookieElement.width = 200;
    }  
}
