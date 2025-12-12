let x = 0;
let y = 120;

let current;
let prev = -1;



let intervalId = setInterval(
    () => {
        clearInterval();

        current = window.scrollY;
        console.log(current, prev);
        if (current !== prev) {

            // window.scroll({
            //     top: current + y,
            //     left: x,
            //     behavior: "smooth"
            // });
            prev = current;
            window.scrollBy({
                top: y,
                left: x,
                behavior: "smooth"
            })



        }
        else {

            window.close();
        }

    },
    700
);

