// 6. Make a function without any built-in sort functions 
// that use two sorted arrays and merge them into one array

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];

    let i = 0;

    let m = arr1.length;
    let n = arr2.length;
    
    let smallLength = m > n ? arr2.length : arr1.length;
    while (i < smallLength){
        if (arr1[i] > arr2[i]){
            mergedArray.push(arr2[i])
            mergedArray.push(arr1[i])
        }else{
            mergedArray.push(arr1[i])
            mergedArray.push(arr2[i])
        }

        i=i+1;
    }
    
    let remainingArray = m > n ? arr1.slice(smallLength) : arr2.slice(smallLength);
    
    return [...mergedArray , ...remainingArray]  

}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8 , 9 , 10];

const mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]