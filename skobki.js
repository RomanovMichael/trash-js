// Напиши функцию, которая проверяет, является ли строка валидной последовательностью скобок.
// 👉 Строка содержит только '(', ')', '{', '}', '[', ']'.
// 📋 Правила валидации:
// Каждой открывающей скобке должна соответствовать закрывающая того же типа.
// // Скобки должны быть закрыты в правильном порядке.

    const s = "()[]{}"
    const s1 = "({[]})"
    const s2 = "([)]"
    const s3 = "{[]}"
    const stack = []
    
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const isValid = (str) => {
        for(let char of str ) {
            if(map[char]) {
                stack.push(char)
                // console.log(stack)
            } else {

                const last = stack.pop()
                // console.log(stack)
                if(map[last] !== char) { 
                    return false
                }
            }
        }
        return stack.length === 0
    }

    // isValid(s3)

    const l = isValid(s3)
    console.log(l)
    
// ➡️ Сложность этого решения:

// Цикл по строке: O(n) (n — длина строки)

// Для каждого символа:

// map[char] ➔ это O(1) (поиск по ключу в объекте)

// stack.push() и stack.pop():

// ❗ Оба метода работают за O(1), потому что стек — это просто массив, где операции добавления/удаления происходят с конца массива.

// 👉 Почему pop() — O(1):
// JavaScript массивы оптимизированы так, что:

// push() и pop() с конца массива — это O(1)

// А вот если бы ты делал shift() (удаление с начала массива), это было бы O(n), потому что элементы нужно сдвигать.

// ✅ Вывод:

// Цикл — O(n)

// Все внутренние операции — O(1)

// 👉 Итоговая сложность: O(n).



var isValid = function(s) {
    for (let char of s) {
        if(map[char]) {
            stack.push(char)
        } else {
            const last = stack.pop()

            if (map[last] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
};