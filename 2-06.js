
const sumNested = (arr) => {
    let sum = 0
    
    for(let el of arr) {
        if(typeof el === 'number') {
            sum += el
        } else if (Array.isArray(el)) {
            sum += sumNested(el)
        }
    }

    return sum
}

const depth = (arr, level = 0) => {
    let max = 0
    console.log('→ Вызов на уровне', level, '| arr =', arr)

    for (let el of arr) {
        if (Array.isArray(el)) {
            console.log('  ⤷ Найден массив:', el)
            const innerDepth = depth(el, level + 1)
            console.log(`  🔙 Возвращена глубина ${innerDepth} из`, el)
            max = Math.max(max, innerDepth)
            console.log(`  📊 max обновлён до ${max}`)
        }
    }

    const result = max + 1
    console.log('⬅️ Возврат с уровня', level, '| результат:', result)
    return result
}



// console.log(depth([1, 2, 3])         )  // → 1)
// console.log(depth([1, [2, 3]])       )  // → 2)
console.log(depth([1, [2, [3, [4]]]]))  // → 4)
// console.log(sumNested([1, [2, [3, 1]], 3])) // 👉 15
// sumNested([[1, 2], 3, [4, [5]]]) // 👉 15
