//8. Write a JavaScript function to find the largest element 
// in the nested array

function largestElement(nestedArr){
  let max = -Infinity;

  for (let i = 0 ; i < nestedArr.length ; i++){
    if (Array.isArray(nestedArr[i])){
        let m = largestElement(nestedArr[i]);
        if (m > max){
            max = m
        }
    }else{
        let nestedArrCurr = nestedArr[i];
        if (max < nestedArrCurr){
            max = nestedArrCurr;
        }
        
    }
  }

  return max

}




const nestedArr = [1, [2, 3, [4, 5]], 6, [7, 8]];
console.log(largestElement(nestedArr , 0));