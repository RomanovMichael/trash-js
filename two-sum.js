const array = [2, 7, 11, 15]
const target = 9

// 💡 Сложность:
// Внешний цикл — O(n)
// Внутренний цикл — O(n)
// 👉 Итого: O(n²)

const fn = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j])
            if (arr[i] + arr[j] === target) {
            return [i, j]
            }
        }
    }
}


// Сложность:
// Проходим один раз → O(n)
// Операции Map → O(1)
// 👉 Итого: O(n) 🚀

// const array = [2, 7, 11, 15]
// const target = 9

// const fn1 = (arr, target) => { 
//     const hash = new Map()

//     for (let i = 0; i < arr.length; i++) {

//         const complement = target - arr[i]
        
//         if(hash.has(complement)) {
//             return [hash.get(complement), i]
//         }

//         hash.set(arr[i], i)
//     }

//     // return null
// }


const fn1 = (arr, target) => { 
    const hash = new Map()

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        console.log('i:', i, 'arr[i]:', arr[i], 'complement:', complement, 'hash:', hash)

        if (hash.has(complement)) {
            console.log('FOUND:', complement)
            return [hash.get(complement), i]
        }

        hash.set(arr[i], i)
    }

    return null
}

console.log(fn1([2,7,11,15], 9))

// i: 0 arr[i]: 2 complement: 7 hash: Map(0) {}
// i: 1 arr[i]: 7 complement: 2 hash: Map(1) { 2 => 0 }

// const r = fn1(array) 
// console.log(r)