// ✅ 3️⃣ Тема: Valid Parentheses (Стек)
// Условие:
// Проверь строку из скобок ()[]{}, валидна ли она (каждая открывающая имеет правильную закрывающую).

// ➡️ Пример:

// js
// Копировать
// Редактировать
// s = "{[]}"
// // Output: true
// 👉 Решаем ещё раз и объясняем почему стек лучше всего здесь.

const map = {
    '(': ')',
    '{': '}',
    '[': ']'
}

const isValid = (str) => {
    const stack = []

    for (char of str) {

        if(map[char]) {
            stack.push(char)
        } else {
            const last = stack.pop()

            if( map[last] !== map[char]) {
                return false
            }
        }
    }

    return stack.length === 0
}

const r = isValid('{[]}')