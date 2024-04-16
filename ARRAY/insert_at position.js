//Insert at position x

a1 = [60, 30, 10, 67, 40];
let position = 2;

a1.splice(position,0,70)
console.log(a1);

//---------------

//Insert at position x

a1 = [60, 30, 10, 67, 40];
let a2 = 70;
position = 2;
console.log(a1);

for (let i = a1.length - 1; i >= position; i--) {
    a1[i + 1] = a1[i];
    
    if (i == position) {
      a1[i] = a2;
    }
    
}
console.log(a1);

