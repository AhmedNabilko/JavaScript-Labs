
let i = 1;
let input;
let value;
let sum = 0;
do {
    input = prompt("Enter a value (0 to break):");
    i++;

    value = Number(input);
    if ((value !== 0) && (!isNaN(value))) {
        sum += value;
        console.log("Total Sum:" + sum);

    }

} while ((sum <= 100) && (value !== 0));

console.log("Summation Of values is ", sum);