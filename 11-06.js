// Напиши функцию, которая считает сумму всех чисел во вложенных массивах

const sumNested = (nums) => {
    return nums.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
           return acc += sumNested(curr)
        } else {
            return acc += curr
        }
    }, 0)
}

console.log(sumNested([1, [2, 3], [[4], 5]]) )



const flatten = (nums) => {
    return nums.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
            acc.push(...flatten(curr))
        } else {
            acc.push(curr)
        }

        return acc
    }, [])
}

// Верни массив без вложенности
console.log(flatten([1, [2, [3, [4]]]]))


const countNumbers = (nums) => {
    return nums.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
            acc += countNumbers(curr)
        } else if (typeof curr === 'number') {
            acc += 1
        }

        return acc
    }, 0)
}
// Считай сколько чисел всего во вложенных массивах
console.log(countNumbers([1, [2, [3, [4, 5]]]])) // → 5