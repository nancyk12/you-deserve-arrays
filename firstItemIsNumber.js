const prompt = require('prompt-sync')({sigint: true});

let newArray = JSON.parse(prompt("Enter an array: "));//JSON stands for: javaScript object notation

if (typeof newArray[0] === "number"){
    console.log("True!");
} else {
    console.log("False!");
}

//typeof userArray