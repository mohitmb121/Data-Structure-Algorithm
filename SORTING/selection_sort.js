//SELECTION SORT

let a = [34, 3, 1, 25, 54, 12, 89, 5, 76, 789];

for (i = 0; i < a.length; i++) {
  for (j = i+1 ; j < a.length; j++) {
      
      if (a[j] < a[i]) {
          let temp = a[j];
          a[j] = a[i];
          a[i] = temp;
        }
    }
}

console.log(a);

