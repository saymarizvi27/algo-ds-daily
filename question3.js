// Write a JavaScript function that finds the 
// maximum number in an arrayWrite a JavaScript 
// function that finds the maximum number in an array


function findMaxNumber(arr) {
    if (arr.length < 0){
        return -1 
    }
    let maxNum = arr[0];
    for (let i = 0 ; i < arr.length ; i ++){
        if (arr[i] > maxNum){
            maxNum = arr[i];
        }
    } 

    return maxNum;

}

// Example usage:
const numbers = [3, 5, 7, 2, 8 , 1 , 11 , 3];
console.log(findMaxNumber(numbers)); 