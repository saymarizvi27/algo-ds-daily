// Make a deep clone function in JavaScript that 
// makes an array or a nested object without any 
// original reference


function deepClone(originalObject){
  if (typeof originalObject !== 'object' || originalObject=== null){
    return originalObject;
  }
  const cloneObj = Array.isArray(originalObject) ? [] : {}
  for ( let i in originalObject){
    if (originalObject.hasOwnProperty(i)){
        cloneObj[i] = deepClone(originalObject[i]);
    }
  }

  return cloneObj;
}


const originalObject = { // Fixed variable name by removing space
    name: "Alice", // Added missing comma here
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    numbers: [{
        "a": "b"
    }]
};

console.log(deepClone(originalObject));