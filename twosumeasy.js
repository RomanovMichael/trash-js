// ✅ 1️⃣ Тема: Two Sum (Map/Set)
// Условие (разминка):
// Дан массив nums и число target. Найди любые два числа, сумма которых равна target.
// ✅ Это мы уже делали → быстрый повтор.

// ➡️ Дано:

// js
// Копировать
// Редактировать
// nums = [3, 2, 4], target = 6
// 👉 Реши снова и объясни устно логику + сложность.

const twoSum = (nums, target) => {
    const map = new Map()

    for (let i=0; i<nums.length; i++) {
        const complement = target - nums[i]

        if(map.has(complement)) {
            return [nums[i], complement]
        }

        map.set(nums[i], i)
    }
}

const r = twoSum([3, 2, 4], 6)
console.log(r)