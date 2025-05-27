
const sum = (nums) => {
    let result = 0

    for(let num of nums) {
        if(num > 0) {
            result += num
        }
    }

    return result
}
    const sum2 = (nums) => {
        return nums.reduce((acc, current) => {
            if(current > 0) {
               return acc += current
            }

            return acc
        }, 0)
    }

console.log(sum([1, -4, 7, 12]))
console.log(sum2([1, -4, 7, 12]))
