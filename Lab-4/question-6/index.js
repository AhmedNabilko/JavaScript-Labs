
let doc = document;
doc.addEventListener("keydown", (e) => {
    let key = e.key;
    let ascii = e.keyCode;

    if ((e.shiftKey) || (e.getModifierState("Alt")) || (e.ctrlKey)) {

        alert("Detected :)\n You Press " + key + "\nKey Code: " + ascii);
        console.log("Detected: " + key + " Pressed");
    } else {
        alert("You Press " + key + "\nKey Code: " + ascii);

    }
})


doc.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Mouse Right Button Is Clicked");
    console.log("Mouse Right Button Is Clicked");
})