//7. Write a JavaScript program to change the string to title 
// (first letter of every word should be in upper case)


let str = "hello world from javascript";

let titleCase = str.split(" ").map((word)=>{
    return word.charAt(0).toUpperCase() + ""+ word.slice(1);
}).join(" ")

console.log(titleCase);