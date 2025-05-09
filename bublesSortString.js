const arr = [ 
    'sfdsf',
    'vvvvrvvrrsgwrvrewv',
    'sfssf',
    'qqqwwvv',
    'svsdvsv',
    'slslslaaaee',
    'l',
    'ooo'
]

const bubbleSort = (array) => {

    const { length } = array

    for(let i = 0; i < length; i++) {
    
        for(let j = 0; j < length - 1 - i; j++) {
            if(array[j].length > array[j + 1].length) {
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

