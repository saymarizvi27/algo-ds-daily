//5. Write a JavaScript program to check whether the given number is prime

function isPrime(number){
    if (number === 0 || number === 1 || number === 2 || number===3){
        return true;
    }
    if (number % 2 === 0){
        return false; 
    }
    for (let i = 3 ; i<= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(17));