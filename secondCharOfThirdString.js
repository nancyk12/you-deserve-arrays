const prompt = require('prompt-sync')({sigint: true});

let newArray = JSON.parse(prompt("Enter an array: "));//JSON stands for: javaScript object notation

if (typeof newArray[2][1] === "string"){
    console.log(newArray[2][1]);
} else {
    console.log("Error!");
}
//firstCharOfSecondString
/* secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead.*/

/*adding a file to github
*/