


let a = [12, 11, 13, 5, 6];
let n = a.length;

function swap(a1, i1, j1) {
  let c = a1[i1];
  a1[i1] = a1[j1];
  a1[j1] = c;
}

swap(a , 1,2)
console.log(a);