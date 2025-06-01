const countFrequencies = (nums) => {

    const result = {}

    for(let i = 0; i < nums.length; i++) {
        const el = nums[i]
        
        if(result[el]) {
            result[el] += 1
        } else {
            result[el] = 1
        }

    }

    return result
}

const countFrequencies1 = (nums) => {
    return nums.reduce((acc, current) => {
        if(acc[current]) {
            acc[current] +=1
        } else {
            acc[current] = 1
        }

        return acc
    }, {})
}

const countFrequencies2 = (nums) => {
    const map = new Map()

    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    return map
}

const mostFrequent = (nums) => {
    const map = new Map()
    let most = 0
    let mostKey = null

    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    for (let [key,val] of map.entries()) {
        console.log(key, val)
        if(val > most) {
            most = val
            mostKey = key
        }
        // most = val > most ? val : most
    }

    return mostKey
}

const mostFrequent1 = (nums) => {
    const map = new Map()

    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const [mapKey, mapVal] = [...map.entries()].reduce((acc, current) => {
        if(current[1] > acc[1]) {
            acc = current
        }
        return acc
    })

    return mapKey
}

// console.log(countFrequencies([1, 2, 2, 3, 1, 2]))
// console.log(countFrequencies1([1, 2, 2, 3, 1, 2]))
// console.log(countFrequencies2([1, 2, 2, 3, 1, 2]))
// console.log(mostFrequent([1, 2, 2, 3, 1, 2]))
console.log(mostFrequent1([1, 2, 2, 3, 1, 2]))
// 👉 { 1: 2, 2: 3, 3: 1 }

// Функция: mostFrequent(nums)
// Ввод: [1, 2, 2, 3, 1, 2]
// Вывод: 2 (встречается 3 раза)