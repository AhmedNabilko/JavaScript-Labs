
function printTemp(x) {
    if (arguments.length === 1) {
        if (typeof x == 'number' && !isNaN(x)) {
            let y = ((x >= 30) ? ("Hot") : ("Cold"));
            document.write("<h2> Today Is " + y + "</h2>");
        }
    }
}

let promp = prompt("Enter Today's Temperature ");

printTemp(Number(promp));