


// [[1, 5, 3], [19, 5], []] //1
// [] // 
// [[]] // 
// [[3],[3],[3],[3],[1, 1]] // 4


const fn = (nums, target) => {

    return nums.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
            acc.push(...fn(curr, target))
        } else if (typeof curr === 'number') {

            if(curr === target) {
                acc.push(curr)
            }
        }

        return acc
    }, [])
}

const fn1 = (nums, target) => {
    const res = []

    for (let num of nums) {
        if(Array.isArray(num)) { 
            res.push(...fn1(num, target))   
        } else if (typeof num === 'number' && num === target) {
            res.push(num)
        }
    }

    return res
}

const r = fn([[1, 5, 3], [19, 5], []], 3)
// const r1 = fn([])
// console.log(r)
console.log(r)