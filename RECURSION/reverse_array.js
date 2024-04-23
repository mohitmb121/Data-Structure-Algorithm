

let a1 = [5, 12, 65, 89, 0,100,200];
let temp;

function customReverse(a,start,end) {
  if (start <= end) {
    temp = a[start];
    a[start] = a[end];
    a[end] = temp;
    customReverse(a, start + 1, end - 1);
  }
}

customReverse(a1, 0, a1.length - 1);