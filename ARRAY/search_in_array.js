//Search index in Array

let a1 = [20, 40, 60, 5, 10, 70, 80, 99];
let item = 70;
a2 = a1.indexOf(item);
console.log(a2);

//--------------------------------------

a1 = [20, 40, 60, 5, 10, 70, 80, 99];
item = 70;
let index = undefined;
for (i = 0; i <= a1.length - 1; i++) {
  if (a1[i] === item) {
    index = i;
    break;
  }
}
console.log(index);
//---------------------------------------------

a1=[1,2,3,4]
a2 = a1.includes(2)
console.log(a2);

//------------------------------------------------

a1=[1,2,3,4]
a2 = a1.find((i)=> {return i>2})
console.log(a2);

