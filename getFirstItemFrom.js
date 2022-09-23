const prompt = require('prompt-sync')({sigint: true});

let newArray = JSON.parse(prompt("Enter an array: "));//JSON stands for: javaScript object notation
console.log(newArray[0]);

