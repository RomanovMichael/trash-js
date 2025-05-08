// ✅ 4️⃣ Тема: Remove Element (Двойной указатель)
// Условие:
// Дан массив nums и val. Удали все элементы val in-place и верни новую длину массива.

// ➡️ Пример:

// js
// Копировать
// Редактировать
// nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,_,_]
// 👉 Реши ещё раз и объясни логику двойных указателей.


const removeEl = (nums, val) => {
    let k = 0

    for ( let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) { 
            nums[k] = nums[i];
            k++
        }
    }

    return k 
}

console.log(removeEl( [3,2,2,3], 3))