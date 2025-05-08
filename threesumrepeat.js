// ✅ 5️⃣ Тема: Three Sum (Два указателя)
// Условие:
// Найди все уникальные тройки в массиве, сумма которых = 0.

// ➡️ Пример:

// js
// Копировать
// Редактировать
// // Output: [[-1,-1,2],[-1,0,1]]
// 👉 Полностью объяснить логику сортировки + два указателя + пропуск дубликатов.

// nums = [-1,0,1,2,-1,-4]


const sum = (nums) => {
    const result = []

    nums.sort((a, b) => a - b);

    
    for(let i = 0; i < nums.length; i++) {

        if(i > 0 && nums[i] === nums[i - 1 ]) continue

        let left = i + 1
        let right = nums.length - 1

        while(left < right) {
            const sum = nums[left] + nums[right] + nums[i]

            if(sum === 0 ) {
                result.push([nums[left], nums[right], nums[i]])


                while(left < right && nums[left] === nums[left + 1]) left++
                while(left < right && nums[right] === nums[right - 1]) right--

                left++
                right--
            } else if(sum < 0) {
                console.log('мало')
                console.log(nums[left], nums[right], nums[i])
                left++
            } else {
                console.log('много')
                right--
            }

        }
    }


    return result 
}


const r = sum([-1,0,1,2,-1,-4])
console.log(r)