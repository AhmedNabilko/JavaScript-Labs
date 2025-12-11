
function getExpression(str) {

    let isExpression = /[^0-9+\-*/.]/;

    if (isExpression.test(str)) {
        throw Error("invalid expression :( ")
    }


    let digits = str.split(/[\+\-\*\/]/);

    let num;
    let nums = [];
    for (let i = 0; i < digits.length; i++) {
        num = Number(digits[i]);

        if (digits[i] === "" || Number.isNaN(num)) {
            throw Error("Missing operands or operators");
        }
        nums.push(num);
    }


    let operators = str.match(/[\+\-\*\/]/g);


    if (!operators) {
        operators = [];
    }

    // 3 + 3   2 numbers              1 operator
    if ((nums.length - 1) !== (operators.length)) {
        throw Error("Invalid Expression Format");
    }

    let obj = {
        'nums': nums,
        'operators': operators
    }
    return obj;
}


function calculate(data) {

    let numbers = data.nums;
    let operators = data.operators;

    let n1;
    let n2;
    let operator;
    let result;

    for (let i = 0; i < operators.length; i++) {

        if (operators[i] === '*' || operators[i] === '/' || operators[i] === '+' || operators[i] === '-') {
            n1 = numbers[i];
            n2 = numbers[i + 1];
            operator = operators[i];
            result = 0;

            if (operator === '*') {
                result = n1 * n2;
            } else if (operator === '/') {
                result = n1 / n2;
            } else if (operator === '+') {
                result = n1 + n2;
            } else if (operator === '-') {
                result = n1 - n2;
            }


            numbers.splice(i, 2, result);

            operators.splice(i, 1);

            i--;
        }
    }


    return numbers[0];
}



let input = prompt("Enter math expression :");


let data = getExpression(input);


let result = calculate(data);


alert("You entered: " + input + ", and the result is: " + result);

