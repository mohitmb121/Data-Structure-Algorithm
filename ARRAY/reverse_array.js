
let a= [1,2,3,4]
let start = 0;
let end = a.length - 1;

while (start <= end ) {

  temp = a[start]
  a[start] = a[end]
  a[end]=temp

  start++;
  end--;
}

console.log(a);