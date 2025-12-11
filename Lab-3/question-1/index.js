
let radius;
do {
    radius = prompt("What is the value of your circle's radius");
    if (!(isFinite(radius))) {
        alert("Invalid Input, Enter Valid Number");
    }

} while (!(isFinite(radius)));
if (isFinite(radius)) {

    let area = (Math.PI) * (Math.pow(radius, 2));

    alert("Total area of the circle is " + area);
}




let sqrtInput;

do {
    sqrtInput = prompt("What is the value you want to calculate its square root?");
    sqrtInput = Number(sqrtInput);

    if (!(Number.isInteger(sqrtInput))) {
        alert("Invalid Input, Enter Valid Ingteger Number");
    }

} while (!(Number.isInteger(sqrtInput)));

if (Number.isInteger(sqrtInput)) {

    let root = Math.sqrt(sqrtInput);

    alert("square root of " + sqrtInput + " is " + root);
}


let angle;

do {
    angle = prompt("Enter an angle to calculate its cos value");

    if (!(isFinite(angle))) {
        alert("Invalid Input, Enter Valid Number");
    }

} while (!(isFinite(angle)));


if (isFinite(angle)) {
    let rad = angle * (Math.PI / 180);

    let value = Math.cos(rad);



    document.write("cos " + angle + " is " + value.toFixed(4));

}