function printOdds(start, end) {

    start = Number(start);
    end = Number(end);

    if (arguments.length !== 2) {
        throw new Error("Enter two args: start and end number");
    } else if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        throw new Error("Enter valid numbers");
    } else {
        let min = Math.min(start, end);
        let max = Math.max(start, end);

        for (let i = min; i <= max; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }

    }




}

printOdds(1, 10);



