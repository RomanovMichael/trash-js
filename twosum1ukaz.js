// ✅ 2️⃣ Тема: Two Sum II (Два указателя)
// Условие:
// Отсортированный массив numbers (индексация с 1), найди два числа сумма которых равна target.
// Возвращай их индексы (не значения!).

// ➡️ Дано:

// js
// Копировать
// Редактировать
// numbers = [2, 7, 11, 15], target = 9
// // Output: [1,2]
// 👉 Нужно снова пройти и объяснить логику указателей.

 
const sum = (nums, target) => {

    let left = 0
    let right =  nums.length - 1

    while(left < right) {

        const sum = nums[left] + nums[right]

        if(sum === target) {
           return [left + 1, right + 1] 
        }

        if(sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}

const r = sum([2, 7, 11, 15], 9)

console.log(r)