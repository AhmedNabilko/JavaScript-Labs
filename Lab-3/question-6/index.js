
console.log("reverse function parameters ");

function printArgumentReverse1() {

    console.log(typeof arguments);

    let args = Object.values(arguments);

    console.log(args);

    console.log(args.reverse());
    return args;

}


function printArgumentReverse2() {


    console.log(typeof arguments);

    let args = Array.from(arguments);

    console.log(args);

    console.log(args.reverse());

    return args;

}

console.log("first way");
printArgumentReverse1(1, 2, 3, 4, 5, 6, 7);
console.log("second way");
printArgumentReverse2(1, 2, 3, 4, 5, 6, 7);



console.log("function accept exact 2 parameters");
function func(x, y) {
    let isParameter = false;
    if (arguments.length !== 2) {
        console.error("number of parameters: " + arguments.length + "\nyou should enter 2 parameters");
        throw new SyntaxError("func Accept exactly 2 param");

    } else {
        isParameter = true;
        console.log("Parameter { " + x + " , " + y + " } ");
    }
    return isParameter;
}
try {

    func();

} catch (e) {
    console.log(e);
}
try {

    func(1);

} catch (e) {
    console.log(e);
}
try {

    func(1, 2);

} catch (e) {
    console.log(e);
}


console.log("Number Summation (Validating number type and empty input)");
function sum() {
    let args = Object.values(arguments);
    console.log(args);

    if (args.length === 0) {
        console.error("number of parameters: " + arguments.length + "\nyou should enter parameters");
        throw new SyntaxError("no parameters passed :(");

    }

    let isnumbers = args.every(function (i) {
        return (Number.isFinite(i));
    })

    if (!isnumbers) {
        console.error("You must be enter numbers");
        throw new SyntaxError("All parameters must be numbers.");
    }

    let sum = args.reduce(
        function (total, i) {
            return total += i;
        }
    );
    console.log("Sum:" + sum);
    return sum;


}

try {
    console.log(sum(1, 2));
    console.log(sum(10.2, 20.3, 30));
} catch (e) {
    console.log(e.message);
}


try {
    console.log(sum(1, "2"));
    console.log(sum());
} catch (e) {
    console.log(e.message);
}