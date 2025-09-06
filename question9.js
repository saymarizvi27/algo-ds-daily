//2. Develop a single-level array by functioning it 
// into a flat nested array

function flattenArray(nestedArray , arr){
    for (let i = 0 ; i < nestedArray.length; i++){
        if (Array.isArray(nestedArray[i])){
           const subArr = flattenArray(nestedArray[i], []);
              arr = arr.concat(subArr);
        }else{
            arr.push(nestedArray[i])
        }
    }
    return arr;
}

const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
const flattenedArray = flattenArray(nestedArray , []);
console.log("Flattened array:", flattenedArray);
