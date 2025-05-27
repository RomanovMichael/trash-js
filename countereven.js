

const countEvens = (nums) => {
    const result = []

    for(let num of nums)  {
        if(num % 2) continue

        result.push(num)
    }
    console.log(result.length)
    return result.length
}

const countEvens1 = (nums) => {
    return nums.reduce((acc, current) => {
        return current % 2 === 0 ? acc+=1 : acc
    }, 0)
}
 
countEvens1([2, 1, 4, 7, 6]) // 👉 3 (т.к. 2, 4, 6 — чётные)
countEvens1([1, 3, 5])       // 👉 0