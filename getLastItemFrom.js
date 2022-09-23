const prompt = require('prompt-sync')({sigint: true});

let newArray = JSON.parse(prompt("Enter an array: "));//JSON stands for: javaScript object notation
let lastStringChar = newArray[newArray.length-1];
console.log(lastStringChar);