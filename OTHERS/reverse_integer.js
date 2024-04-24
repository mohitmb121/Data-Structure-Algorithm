

function reverseInt(n){
    let reverse= parseInt(n.toString().split('').reverse().join('') ) * Math.sign(n)
    return reverse
}

a1= -123
console.log(reverseInt(a1));



