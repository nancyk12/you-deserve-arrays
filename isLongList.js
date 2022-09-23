const prompt = require('prompt-sync')({sigint: true});


let newArray = JSON.parse(prompt("Enter an array: "));//JSON stands for: javaScript object notation

if (newArray.length >= 10){
    console.log("True!");
} else {
    console.log("False!");
}
