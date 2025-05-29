// Задача 3: "Найди максимальное число в массиве"
// Напиши функцию, которая возвращает максимальное число из массива.

// Примеры:



const findMax = (nums) => {
    let max 
    
    for(let [key, num] of nums.entries()) {
        if(key === 0) {
            max = num
        }

        if(num > max) {
            max = num;
        }
    }
    
    return max;
}

const findMax1 = (nums) => {
    let max 
    
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            max = nums[i]
        }

        if(nums[i] > max) {
            max = nums[i];
        }
    }
    
    return max;
}

const findMax2 = (nums) => {
    return nums.reduce((acc, current) => {
        if(current > acc) { 
            acc = current
        }

        return acc
    })
}

console.log(findMax2([3, 7, 2, 9, 1]));
console.log(findMax2([-10, -5, -1]));