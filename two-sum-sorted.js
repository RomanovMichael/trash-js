// 🟢 Задача 1: Two Sum II — Input Array Is Sorted
// ➡️ Условия:

// Тебе дан отсортированный массив чисел (по возрастанию) и целевое число target.

// Нужно найти индексы двух чисел, которые дают в сумме target.

// Важно: массив отсортирован, индексы начинаются с 1 (не с 0).

// Пример:

// js
// Копировать
// Редактировать
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// ❗ Ключевой момент: здесь массив уже отсортирован, так что хеш-таблицу использовать не нужно. Надо придумать, как применить два указателя.


const numbers = [2,7,11,15]

const twoSum2 = (nums, target) => {

    let left = 1
    let right = nums.length - 1

    while(left < right) {
        if(nums[left] + nums[right] === target) {
            return [nums[left], nums[right]]
        }
        console.log(nums[left], nums[right])
        left++
        right--
    }
}

const r = twoSum2(numbers, 9)

console.log(r)
