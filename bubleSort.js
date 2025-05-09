function bubbleSort(arr) {
    const n = arr.length

    // 🔄 Внешний цикл контролирует количество проходов
    for (let i = 0; i < n - 1; i++) {

        console.log(`Проход №${i + 1}`)

        // 🔁 Внутренний цикл перебирает элементы до (n - 1 - i)
        for (let j = 0; j < n - 1 - i; j++) {

            console.log(`Сравниваем ${arr[j]} и ${arr[j + 1]}`)

            if (arr[j] > arr[j + 1]) {
                // ⬅️➡️ Обмен местами
                console.log(`Меняем ${arr[j]} и ${arr[j + 1]}`)
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            } else {
                console.log(`Ничего не делаем`)
            }

            console.log(`Текущий массив: ${arr.join(', ')}`)
        }
    }

    return arr
}

console.log(bubbleSort([5, 3, 8, 4, 2]))
