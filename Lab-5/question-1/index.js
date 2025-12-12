let openbtn = document.getElementById("open");
let closebtn = document.getElementById("close");

let reversebtn = document.getElementById("reverse");
let stopbtn = document.getElementById("stop");

let win;
let x = 150;
let y = 150;
let isStop = false;
let screenWidth = screen.availWidth;
let screenHeight = screen.availHeight;
let positionX;
let positionY;
let isVertical = true;
let timer = null;
function movement() {
    if (!win || ((!win) && win.closed)) {
        console.log("win is not exist");
    } else {

        if (!isStop) {
            if (isVertical) {
                positionY = Number(win.screenY);

                if (((positionY + y + win.outerHeight) > screenHeight) || ((positionY + y) < 0)) {
                    y = y * (-1);
                } else {
                    win.moveBy(0, y);
                }
            } else {
                positionX = Number(win.screenX);


                if (((positionX + x + win.outerWidth)) > screenWidth || ((positionX + x) < 0)) {
                    x = x * (-1);
                } else {
                    win.moveBy(x, 0);
                }
            }


        } else {
            console.log("Can't Move Child Win");
        }
    }

}
function moveWin() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        if (!isStop) {
            movement();
        }
        else {
            clearInterval(timer);
        }


    }, 500);

}
openbtn.onclick = () => {

    if (!win || ((!win) && win.closed)) {


        win = open("./child.html", "", "width=300,height=300")
        win.focus();
        isStop = false;
        isVertical = true;

        moveWin();




    } else {
        console.log("win already Opened");
    }


};
closebtn.onclick = () => {

    if (!win || ((!win) && win.closed)) {

        console.log("no win open");

    } else {

        win.close();
        win = undefined;
    }

};

reversebtn.onclick = () => {

    if (((win) && !win.closed)) {

        isVertical = !isVertical;
        moveWin();



    } else {

        console.log("win Not Found ");
    }

};

stopbtn.onclick = () => {
    isStop = true;
};
