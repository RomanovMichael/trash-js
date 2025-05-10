// ✅ 1️⃣ Longest Palindromic Substring (Medium)
// Условие:

// Дана строка s, найти самую длинную подстроку-палиндром в ней.

// Примеры:

// js
// Копировать
// Редактировать
// Input: "babad"
// Output: "bab"
// (или "aba" тоже допустимо)

// Input: "cbbd"
// Output: "bb"
// 💡 Ключ:

// Тут обычная проверка не поможет, нужно искать палиндромы внутри строки, которые могут быть в середине, например "aba", или "bb".

// Простая идея: пройти циклом и для каждой позиции расширять палиндром вокруг неё.


const pol = (str) => {
    let longest = '';

    for (let i = 0; i < str.length; i++) {

        const left = i - 1
        const right = i + 1  

        while(left >= 0  && right < str.length && str[left] === str[right]) {
            left--
            right ++


        }
    }

    return longest
}
