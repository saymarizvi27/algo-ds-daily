// 6. Write a JavaScript function that uses an array of numbers 
// and only gives a new array with even numbers


const arr1 = [33 ,4 , 2 , 5 , 7 , 1 , 6 , 8 , 100 , 1 , 4 , 13];

const arr2 = arr1.filter((m)=> { return m%2 === 0});

console.log(arr2);