const input = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = (arr) => {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
};



//Method 2
const removeDuplicates2 = (arr) => {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
};

const result = removeDuplicates(input);
console.log(result); // Output: [1, 2, 3, 4, 5]
