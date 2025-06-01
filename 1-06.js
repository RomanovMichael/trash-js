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


const sumEvens = (nums) => {
    return nums.reduce((acc, current) => {
        // if(current % 2 === 0) {
        //     acc += current
        // }

        // return acc
        return current % 2 === 0 ? acc +  current : acc
    }, 0)
}


const findDuplicates = (nums) => {
    const map = new Map()
    const result = []

    for(let num of nums) {
        if(map.has(num)) {

            if(map.get(num) < 2) {
                map.set(num, map.get(num) + 1)
                result.push(num)
            }
        } else {
            map.set(num, 1)
        }
    }

    return result
}


const unique = (nums) => {
    const result = []

    for(let num of nums) {
        if(!result.includes(num)) {
            result.push(num)
        }
    }

    return result
}


const unique1 = (nums) => {
    const map = new Set()

    for(let num of nums) {
        if(!map.has()) {
            result.push(num)
        }
    }

    return result
}

const groupByLength = (words) => {
    const map = new Map()


    for(let word of words) {

        const { length } = word

        if(map.has(length)) {
            console.log(word)
          map.get(length).push(word)
        } else {
            map.set(length, [word])
        }
    }

    return map
}


const hasIntersection = (arr1, arr2) => {
    const seen = new Set(arr1) 

    for(let num of arr2) {
        if(seen.has(num)) {
            return true
        }
    }

    return false
}


const invertObject = (obj) => {
    const result = {}

    for(let [key, val] of Object.entries(obj)) {
        result[val] = key
    }

    return result
}

// 👉 { '1': 'c', '2': 'b' }
// последний ключ перезаписывает предыдущий

console.log(invertObject({ a: 1, b: 2, c: 1 }))
// console.log(hasIntersection([1, 2, 3], [3, 4, 5]))
// console.log(hasIntersection([1, 2], [3, 4]))

// console.log(groupByLength(['hi', 'hello', 'yo', 'sun']) )
// console.log(countFrequencies([1, 2, 2, 3, 1, 2]))
// console.log(countFrequencies1([1, 2, 2, 3, 1, 2]))xw
// console.log(countFrequencies2([1, 2, 2, 3, 1, 2]))
// console.log(mostFrequent([1, 2, 2, 3, 1, 2]))
// console.log(mostFrequent1([1, 2, 2, 3, 1, 2]))
// console.log(sumEvens([1, 2, 3, 4])) // 👉 6)
// console.log(findDuplicates([1, 2, 2, 3, 1, 4])) // 👉 [1, 2]
// console.log(unique([1, 2, 2, 3, 1])) // 👉 [1, 2, 3]))
// console.log(unique1([1, 2, 2, 3, 1])) // 👉 [1, 2, 3]))
// 👉 { 1: 2, 2: 3, 3: 1 }

// Функция: mostFrequent(nums)
// Ввод: [1, 2, 2, 3, 1, 2]
// Вывод: 2 (встречается 3 раза)