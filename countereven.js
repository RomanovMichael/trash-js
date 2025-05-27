

const countEvens = (nums) => {
    const result = []

    for(let num of nums)  {
        if(num % 2) continue

        result.push(num)
    }
    console.log(result.length)
    return result.length
}

countEvens([2, 1, 4, 7, 6]) // 👉 3 (т.к. 2, 4, 6 — чётные)
countEvens([1, 3, 5])       // 👉 0