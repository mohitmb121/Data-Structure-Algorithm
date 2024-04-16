
let a1 =[3,7,12,34,56,90];
let a2=[20,30,40,50]

a=a1.concat(a2)
console.log(a);


//---------------------------------------

a1 =[3,7,12,34,56,90];
a2=[20,30,40,50]
let a3=[];

for(i=0;i<a1.length;i++){
  a3[i]=a1[i];
}

for(i=0;i<a2.length;i++){
  a3[a1.length+i]=a2[i];
}
console.log(a3);