
let stringPattern = /^[a-zA-Z]+$/;
let input1;

let isSensitive;

let flag;

let pattern;
let letters;
let count;

do {
    input1 = prompt("Please, Enter String ");
    if (!(stringPattern.test(input1))) {
        alert("Invaild Input, Please Enter Valid String (contain letters or white space) ");
    }
} while (!(stringPattern.test(input1)));



isSensitive = confirm("Do you Want Case-Sensitive ?\n( ok = yes, cancel = no)");




let reversed = "";

for (let i = input1.length - 1; i >= 0; i--) {
    reversed += input1[i];
}

if (!isSensitive) {
    input1 = input1.toLowerCase();
    reversed = reversed.toLowerCase();
}

if (input1 === reversed) {
    alert("The string is  Palindrome :)");
} else {
    alert("The string isn't  Palindrome :(");
}
