//Binary search

let a1 = [5, 9, 13, 17,45,67,89,100];
let find = 89;
let start = 0;
let end = a1.length - 1;
let position = undefined;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (a1[mid] === find) {
    position = mid;
    break;
  } else if (a1[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(position)
