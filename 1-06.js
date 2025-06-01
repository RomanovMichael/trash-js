// Задача: "Подсчёт количества каждого элемента в массиве"
// Напиши функцию countFrequencies(nums), которая:

// принимает массив чисел

// возвращает объект, где ключ — это число, а значение — сколько раз оно встречается в массиве


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

console.log(countFrequencies([1, 2, 2, 3, 1, 2]))
console.log(countFrequencies1([1, 2, 2, 3, 1, 2]))
console.log(countFrequencies2([1, 2, 2, 3, 1, 2]))
// 👉 { 1: 2, 2: 3, 3: 1 }