//5. Write a JavaScript function that uses an array of objects 
// and keys and shows a new array based on the values of the key 
// in ascending order

function sortObjectArr(arr , key){
    return arr.sort((a , b)=>{
       if(a[key] > b[key]){
        return 1;
       }
       if(a[key] < b[key]){
        return -1;
       }
       else{
        return 0;
       }
    })
}

const data = [
    { name: "Alice", age: 25 },  // Removed the comma after "Alice"
    { name: "Charlie", age: 20 },
     { name: "Bob", age: 30 },
];
const sortedData = sortObjectArr(data, "name");
console.log(sortedData);

