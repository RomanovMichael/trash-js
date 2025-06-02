
const sumNested = (arr) => {
    let sum = 0
    
    for(let el of arr) {
        if(typeof el === 'number') {
            sum += el
        } else if (Array.isArray(el)) {
            sum += sumNested(el)
        }
    }

    return sum
}

console.log(sumNested([1, [2, [3, 4]], 5])) // 👉 15
// sumNested([[1, 2], 3, [4, [5]]]) // 👉 15
