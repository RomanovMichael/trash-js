
const sum = (nums) => {
    let result = 0

    for(let num of nums) {
        if(num > 0) {
            result += num
        }
    }

    return result
}
//     const arr = []

//     return nums.reduce((acc, current) => {
//         if(current > 0) {
//            return arr.push(current)
//         }
//     }, arr)
// }

console.log(sum([1, -4, 7, 12]))
