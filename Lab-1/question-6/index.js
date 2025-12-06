let name;
let input;
let year;
let isValidYear;
let age;

do {
    input = prompt("Enter Your Name : ");
    name = String(input);
    if (name === "") {
        alert("Invalid input, Please enter your name");
    }
} while (name === "");
do {

    input = prompt("Enter Your Birth Year (less than 2010):");


    year = Number(input);

    isValidYear = ((isNaN(year)) || (year <= 0) || (year >= 2010));


    if (isValidYear) {
        alert("Invalid input, Please enter a valid year less than 2010.");
    }




} while (isValidYear);



age = (2025) - year;


document.write(
    "<p><strong>Name:</strong> " + name +
    "</p>" + "<p><strong>Birth year:</strong>" + year +
    "</p> <p><strong>Age:</strong>" + age + "</p>"
);


