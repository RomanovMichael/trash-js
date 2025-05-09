const arr = [
    {age: 15},
    {age: 9},
    {age: 4},
    {age: 1},
    {age: 44},
    {age: 32},
    {age: 12},
]

const bubbleSort = (array) => {
    const { length } = array
    
    for (let i = 0; i < length; i++) {

        for ( let j = 0; j < length - 1 - i; j++ ) {
            if(array[j].age > array[j + 1].age) {
                const temp = array[j]

                array[j] = array[j + 1]
                array[j + 1] = temp 
            }
        }
    }

    return array
}

const res = bubbleSort(arr)

console.log(res)