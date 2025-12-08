
let stringPattern = /^[a-zA-Z\s]+$/;
let input1;


let letterPattern = /^[a-zA-Z\s]$/;
let letter;

let isSensitivePattern = /^[YNyn]$/;
let isSensitive;



do {
    input1 = prompt("Please, Enter String ");
    if (!(stringPattern.test(input1))) {
        alert("Invaild Input, Please Enter Valid String (contain letters or white space) ");
    }
} while (!(stringPattern.test(input1)));





do {
    letter = prompt("Please, Enter Letter");
    if (!(letterPattern.test(letter))) {
        alert("Invaild Input, Please Enter Valid letter (a-z , A-Z , white space) ");
    }
} while (!(letterPattern.test(letter)));




do {
    isSensitive = prompt("Do you Want Case-Sensitive (Y/N) ?");

    if (!(isSensitivePattern.test(isSensitive))) {
        alert("Invaild Input, Please Enter Valid Command (Y/N , y/n) ");
    }
} while (!(isSensitivePattern.test(isSensitive)));




let flag = (isSensitive === "Y" || isSensitive === "y") ? "g" : "ig";

let pattern = new RegExp(letter, flag);

let letters = input1.match(pattern);

let count = (letters) ? letters.length : 0;

alert("The Letter : " + letter + " \nTimes: " + count);


