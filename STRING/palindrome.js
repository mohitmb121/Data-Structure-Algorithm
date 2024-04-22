// palindrome is one whom if we reverse string , we get same string

function palindrome(str){
str=str.toLowerCase()
return str === ( str.split().reverse().join('') )
}


//----------------

function palindrome(a) {
    let start = 0;
    let end = a.length - 1;
    let result = true;
    while (end > start) {
      if (a[start] != a[end]) {
        result = false;
        break;
      }
      start++;
      end--;
    }
    return result;
  }

  let str = "level";
  console.log(palindrome(str))

  