// // ✅ Условие задачи Move Zeroes:
// // Дан массив чисел nums. Нужно переместить все нули в конец массива, сохранив порядок всех ненулевых элементов.

// // 👉 Важно:

// // Решение должно быть in-place (без создания нового массива).

// // Нужно сделать с минимально возможным количеством операций.

// Это, по сути, тоже двойной указатель, но тебе нужно понять:

// Один указатель — где мы хотим поставить ненулевой элемент.

// Другой — который итерируется по массиву.

// Напиши ПЛАН или сразу пробуй кодить, и кидай сюда — я рядом 😎.

// Input [0, 1, 0, 3, 12]
// Output [1, 3, 12, 0, 0]

const move = (nums) => {
    let k = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[k] = nums[i]
            k++
        }
    }

    for(j = k; j < nums.length; j++) {
        nums[j] = 0
    }

    return nums
}

const r = move([0, 0, 1, 0, 3, 12])
console.log(r)