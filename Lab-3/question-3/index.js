
let tips = [
    "Use '===' instead of '==' to check both value and type.",
    "The 'splice()' method modifies the original array, but 'slice()' creates a copy.",
    "Use 'const' for variables that won't change, and 'let' for those that will.",
    "The 'map()' method creates a new array by applying a function to every element.",
    "You can use '!!' to convert any value to a true boolean.",
    "Array.push() adds to the end, while Array.unshift() adds to the start.",
    "Use 'filter()' to create a new array with all elements that pass a test.",
    "Math.floor(Math.random() * n) gives you a random integer from 0 to n-1.",
    "Objects can be traversed using 'for...in' loops.",
    "Strings are immutable; methods like 'replace' return a new string."
];


let index = Math.floor((Math.random() * 10) % tips.length);

document.write(
    "<h1>Tip of the day</h1> <p>" + tips[index] + "</p>"
)
