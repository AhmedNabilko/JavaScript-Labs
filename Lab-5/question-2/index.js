let openbtn = document.getElementById("open");
let closebtn = document.getElementById("close");


let win;
let x = 150;
let y = 150;

openbtn.onclick = () => {

    if (win === undefined || (win !== undefined && win.closed)) {


        win = open("./child.html", "", "width=300,height=300")
        win.focus();




        isStop = false;
    } else {
        console.log("win already Opened");
    }

};
closebtn.onclick = () => {
    if (win === undefined || (win !== undefined && win.closed)) {

        console.log("no win open");

    } else {

        win.close();
        win = undefined;
    }

};
