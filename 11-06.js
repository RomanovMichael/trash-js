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