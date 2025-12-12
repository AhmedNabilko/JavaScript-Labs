let message = "Welcome__:)";
function displayMessage(win, output) {
    if (win !== undefined) {
        let i = 0;
        let intervalId = setInterval(
            () => {
                clearInterval();
                if (i < message.length) {
                    output.innerText += message[i];
                    i++;
                } else {

                    clearInterval(intervalId);
                    let timerID = setTimeout(
                        () => {
                            console.log("closing window ...");
                            clearTimeout(timerID);
                            win.close();

                        }, 500
                    )


                }


            },
            500
        )
    }
}

let output = document.getElementById("message");
displayMessage(window, output);