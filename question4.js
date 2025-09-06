//Write a JavaScript program that calculates the 
// factorial of a number

function factorial(number){
    if (number === 1 || number ===0){
        return 1
    }
    else{
        return factorial(number -1)* number
    }
}

console.log(factorial(1))