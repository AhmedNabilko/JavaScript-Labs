
let stringPattern = /^[a-zA-Z\s]+$/;
let input1;


do {
    input1 = prompt("Please, Enter String ");
    if (!(stringPattern.test(input1))) {
        alert("Invaild Input, Please Enter Valid String (contain letters or white space) ");
    }
} while (!(stringPattern.test(input1)));


function getLargestWord(input) {
    let pattern = /^[a-zA-Z\s]+$/;
    let largestWord = "";
    let max = 0;

    if (pattern.test(input)) {
        let words = input.split(" ");

        largestWord = words[0];
        max = words[0].length;

        for (let i = 1; i < words.length; i++) {

            if (words[i].length > max) {
                max = words[i].length;
                largestWord = words[i];
            }
        }

    }
    return largestWord;

}
alert("The Largest Word :" + getLargestWord(input1));