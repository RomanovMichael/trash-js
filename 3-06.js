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

const hasGreaterThan10 = (nums) => {

    for(let el of nums) {
        if (typeof el === 'number' && el > 10) { 
            return true
        } else if(Array.isArray(el) && hasGreaterThan10(el)) {
            return true
        }
    }
 
    return false
}

const sumEvenNested = (nums) => {
    let sum = 0

    for (let el of nums) {
        if(typeof el === 'number' && el % 2 === 0) {
            sum += el
        } else if(Array.isArray(el)) {
            sum += sumEvenNested(el)
        }
    }

    return sum
}

const minNested = (arr) => {
    let min = Infinity

    for(let el of arr) {
        if(typeof el === 'number') {
            min = Math.min(min, el)        
        } else {
            const diveMin = minNested(el)

            min = Math.min(min, diveMin)
        }
    }

    return min
}


const collectStrings = (arr) => {
    let strings = []

    for(let el of arr) {
        if (typeof el === 'string') {
            strings.push(el)
        } else if(Array.isArray(el)) {
            strings.push(...collectStrings(el))
        }
    }

    return strings
}

console.log(collectStrings(['a', ['b', ['c']]])       )    // 👉 ['a', 'b', 'c'])
console.log(collectStrings([1, ['x'], ['y', ['z']]])  )    // 👉 ['x', 'y', 'z'])
console.log(collectStrings(['hello', [42, ['world']]]))    // 👉 ['hello', 'world'])
console.log(collectStrings([1, 2, 3])                 )    // 👉 [])

// console.log(minNested([1, [2], [3, [4]]])   )       // 👉 1)
// console.log(minNested([[[[10]]], 3])        )      // 👉 3)
// console.log(minNested([8, [6], [4, [2, 0]]]))      // 👉 0)
// console.log(minNested([100])                )     // 👉 100)

// console.log(sumEvenNested([1, [2], [3, [4]]])     )   // 👉 6)
// console.log(sumEvenNested([[[[10]]], 3])          )  // 👉 10)
// console.log(sumEvenNested([1, 3, [5, 7], 9])      )   // 👉 0)
// console.log(sumEvenNested([])                    )   // 👉 0)

// console.log(hasGreaterThan10([1, [2, [3]], 4])        ) // 👉 false)
// console.log(hasGreaterThan10([1, [2, [11]], 4])      )  // 👉 true)
// console.log(hasGreaterThan10([[[[5]]]])              ) // 👉 false)
// console.log(hasGreaterThan10([1, [2, [3, [44]]], 5]) )  // 👉 true)
// console.log(hasGreaterThan10([1, [2, [3, []]], 5]) )  // 👉 false)

// console.log(countNumbers([1, [2, [3]], 4])     )    // 👉 4)
// console.log(countNumbers([[[[5]]]])            )   // 👉 1)
// console.log(countNumbers([1, [2, [3, [4]]], 5]))   // 👉 5)
// console.log(countNumbers([])                   )   // 👉 0)


// console.log(sumNested([1, [2, [3]], 4])) // 👉 10
// console.log(sumNested([[[[5]]]]))       // 👉 5
// console.log(sumNested([1, [2, [3, [4]]], 5])) // 👉 15