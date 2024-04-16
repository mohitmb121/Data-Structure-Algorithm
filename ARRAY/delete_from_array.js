//Delete Element in Array at position x

let a1 = [30, 20, 45, 76, 20, 80];
let position = 2;

a1.splice(position,1)
console.log(a1);

//--------------------------------

//Delete Element in Array at position x

a1 = [30, 20, 45, 76, 20, 80];
position = 2;
for (let i = position; i < a1.length - 1; i++) {
  a1[i] = a1[i + 1];
}
a1.length = a1.length - 1;
console.log(a1);

//-------------------------------

//Removing last element
a1 = [1, 2, 3];
a1.length = a1.length - 1;
console.log(a1);
