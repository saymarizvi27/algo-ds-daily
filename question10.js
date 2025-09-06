//4. Write a JavaScript function that directs 
// whether the given strings are anagrams

function isAnagrams(string1 , string2){
    let map = new Map();
    for (let i = 0 ; i < string1.length ; i++){
        if (map.has(string1.charAt(i))){
            let g = map.has(string1.charAt(i));
            map.set(string1.charAt(i) , g+1);
        }
        else{
            map.set(string1.charAt(i) , 1);
        }
    }

    console.log(map)
      for (let j = 0 ; j < string2.length ; j++){
        if (map.has(string2.charAt(j))){
            let g = map.get(string2.charAt(j));
        
            if (g === 1){
                console.log('henlo');
                map.delete(string2.charAt(j))
            }
            else{
               map.set(string2.charAt(j) , g-1);
            }
           

        }
        else{
            return false;
        }
    }

    if(!map.length){
        return true;
    }else{
        return false;
    } 
}

console.log(isAnagrams("sayma" , "yasma"));