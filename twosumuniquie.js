
const array = [2, 7, 11, 15]
// const target = 9
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map()
    let sum = 0

    // один раз пройти собрать таблицу соответствий

    for (const num of nums) {
        // console.log(map)
        if(map.has(num)) {
            console.log('ecnm')
            map.set(num, map.get(num) + 1) 
        } else {
            map.set(num, 1)
        }
    }

    // второй раз пройти и просуммировать 

    for( const [num, count] of map.entries()) {
        if(count === 1) {

            sum += num
        }
    }

    return sum
};


const r = sumOfUnique([1,2,3,2])

console.log(r)