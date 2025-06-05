
const countNegatives = (arr) => {
    let count = 0

    for(let el of arr) {
        if(typeof el === 'number' && el < 0) {
            count++
        } else if(Array.isArray(el)) {
            count += countNegatives(el)
        }
    }   
    return count
}

console.log(countNegatives([1, [-2, 3, [-4]], 5])) // 👉 2 (−2 и −4)
