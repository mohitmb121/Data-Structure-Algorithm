
let a = [12, 11, 13, 5, 6];
let n = a.length;

function swap(a1, i1, j1) {
  let c = a1[i1];
  a1[i1] = a1[j1];
  a1[j1] = c;
}

for (let i = 0; i < n-1; i++) {
  for (let j = 0 ; j <=n-i-1 ; j++) { 
    if(a[j]>a[j+1]){
    swap(a, j, j + 1);}
  }
}


console.log(a);



