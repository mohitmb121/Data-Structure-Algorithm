

function rotateStringAtIndex(str, index) {
    if (index >= str.length || index < 0) {
      console.log("Invalid index for rotation.");
      return str;
    }
  
    const part1 = str.slice(0, index + 1); // Include the character at the rotation index
    const part2 = str.slice(index + 1);
    
    return part2 + part1;
  }
  
  const originalString = "abcde";
  const rotationIndex = 2;
  
  const rotatedString = rotateStringAtIndex(originalString, rotationIndex);
  console.log(rotatedString); 
  

