

function capitilize(str){
    let sentenceArray = str.split(' ')
    let a1 =  []

    for(i of sentenceArray){
        a1.push(i.slice(0,1).toUpperCase() + i.slice(1).toLowerCase())
    }
    a2=a1.join(' ')
    console.log(a2);

}

capitilize('hello my name is')