

function rotateArrayFromIndex(arr, index) {
    if (index >= arr.length || index < 0) {
      console.log("Invalid index for rotation.");
      return arr;
    }
  
    const part1 = arr.slice(0, index + 1); // Include the element at the rotation index
    const part2 = arr.slice(index + 1);
    
    return part2.concat(part1);
  }
  
a1= [1,2,3,4,5]
result = rotateArrayFromIndex(a1 , 2)
console.log(result);