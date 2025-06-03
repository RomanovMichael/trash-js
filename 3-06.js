


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


const countNumbers = (nums) => {
    let count = 0
    
    for(let el of nums) {
        if(typeof el === 'number') {
            count += 1
        } else {
            count += countNumbers(el)
        }
    }

    return count
}






// console.log(countNumbers([1, [2, [3]], 4])     )    // 👉 4)
// console.log(countNumbers([[[[5]]]])            )   // 👉 1)
// console.log(countNumbers([1, [2, [3, [4]]], 5]))   // 👉 5)
// console.log(countNumbers([])                   )   // 👉 0)


// console.log(sumNested([1, [2, [3]], 4])) // 👉 10
// console.log(sumNested([[[[5]]]]))       // 👉 5
// console.log(sumNested([1, [2, [3, [4]]], 5])) // 👉 15