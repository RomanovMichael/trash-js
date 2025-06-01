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

console.log(countFrequencies([1, 2, 2, 3, 1, 2]))
// 👉 { 1: 2, 2: 3, 3: 1 }