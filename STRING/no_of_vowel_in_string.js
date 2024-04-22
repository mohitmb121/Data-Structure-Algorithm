

function numOfOVowel(str) {
    str = str.toLowerCase();
    vowelArray = 'aeiou'; 

    count = 0;

    for (let i of str) {
        for (let j of vowelArray) {
            if (i === j) {
                count++;
            }
        }
    }
    console.log(count);
    return count;
}

numOfOVowel('assdfe');
