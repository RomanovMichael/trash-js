


const sumNested = (nums) => { 
    let sum = 0

    for(let el of nums) {
        if( typeof el === 'number') {
            sum += el
        } else {
            console.log('dive')
            sum += sumNested(el)
        }
    }
    console.log('hoist')

    return sum
}


// console.log(sumNested([1, [2, [3]], 4])) // 👉 10
// console.log(sumNested([[[[5]]]]))       // 👉 5
// console.log(sumNested([1, [2, [3, [4]]], 5])) // 👉 15