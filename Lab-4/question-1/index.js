
let div = document.getElementById("container");
console.log(div);

let img = document.createElement("img");

img.setAttribute("src", "./js.jpg");
img.setAttribute("alt", "JS image");
console.log(img);

// using append Child
div.appendChild(img);
console.log(div);

//!----------------------------------------------------


let cssImg = document.createElement("img");

cssImg.setAttribute("src", "./css.jpg");
cssImg.setAttribute("alt", "CSS image");
console.log(cssImg);

// using insertBefore  : Here We add css image before specific div's child 
// when using appendChild : Here we add js image after all div's childern
div.insertBefore(cssImg, img);
console.log(div);
//* alert Number of children is 3 because we childNodes Which is return All Comments and text (or White Space) 
alert("The Number of Div's Children is " + div.childNodes.length);
console.log(div.childNodes);

//^ remove Added Image

div.removeChild(cssImg);
