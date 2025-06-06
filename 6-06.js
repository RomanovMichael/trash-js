

const countStrings = (arr) => {
    let count = 0

    for (let el of arr) {
        if(typeof el === 'string') {
            count++
        } else if(Array.isArray(el)) {
            count += countStrings(el)
        }
    }

    return count
}

console.log(countStrings(['a', ['b', 3, ['c']], 1, ['d']]))