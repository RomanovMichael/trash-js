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

const findMax2 = (nums) => {
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

console.log(findMax1([3, 7, 2, 9, 1]));
console.log(findMax1([-10, -5, -1]));