

const countStrings = (arr) => {
    let count = 0

    for (let el of arr) {
        if(typeof el === 'string') {
            count++
        } else if(Array.isArray(el)) {
            count += countStrings(el)
        }
    }

    return count
}

const collectNumbers = (arr) => {
    let resultNums = []

    for(let el of arr) {
        if(typeof el === 'number') {
            resultNums.push(el)
        } else if(Array.isArray(el)) {
            resultNums.push(...collectNumbers(el))
        }
    }

    return resultNums
}

const roundToNearest10 = (num) => {
    console.log(Math.round(num / 10) * 10)
    return Math.round(num)
} 


roundToNearest10(13)  // 👉 10
roundToNearest10(17)  // 👉 20
roundToNearest10(25)  // 👉 30

// console.log(collectNumbers([1, 'a', [2, 'b', [3, 4]], 'c']))
// console.log(countStrings(['a', ['b', 3, ['c']], 1, ['d']]))