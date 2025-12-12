let images = [

    { name: "js.jpg", description: "JS is a programming Language" },
    { name: "css.jpg", description: "CSS is a Style Sheet" },
    { name: "html.png", description: "HTML Is A Markup Language" },


]
console.log(images);


let img = document.getElementById("image");
let desc = document.getElementById("description");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let i = 0;
function updateImage(i) {
    console.log(i);
    img.src = images[i].name;
    img.alt = images[i].description;
    desc.innerText = images[i].description;

}




function onNext() {
    console.log(i);
    i = (i + 1) % images.length;

    updateImage(i);


}

function onPrev() {

    i = ((i + images.length) - 1) % images.length;
    updateImage(i);


}
next.addEventListener("click", onNext);
prev.addEventListener("click", onPrev)


updateImage(i);