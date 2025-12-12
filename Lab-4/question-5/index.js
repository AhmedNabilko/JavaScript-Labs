let body = document.body;
let isWhite = false;
let img = document.getElementById("image");

function clone(img1) {
    //TODO: Use Clone Node withn Question-2
    let img2 = img1.cloneNode(false);
    addEventClick(img2);

    moveImg(img1);
    moveImg(img2);

    body.appendChild(img2);
}
function addEventClick(img) {

    let onclick = function () {
        clone(img);

        isWhite = !isWhite;
        updateLI(isWhite);
    }
    img.addEventListener("click", onclick);

}
addEventClick(img);
let items = document.getElementsByTagName("li");

function moveImg(img) {
    let x = (Math.random() * 1000);
    let y = (Math.random() * 1000);

    img.style.position = "absolute";
    img.style.left = x + "px";
    img.style.top = y + "px"
}

function updateLI(isWhite) {
    let color = (isWhite) ? "black" : "white"

    for (let i = 0; i < items.length; i++) {
        items[i].style.color = color;
    }

}
