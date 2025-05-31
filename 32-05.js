const countOccurrences = (nums, target) => {
    return nums.reduce((acc, current) => {
        if(current === target) {
            acc += 1
        }
        return acc
    }, 0)
}



console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2))   // 👉 3
console.log(countOccurrences([5, 5, 5, 5], 5))         // 👉 4
console.log(countOccurrences([1, 2, 3], 4))            // 👉 0

