const arr = [1, 2, 3, 4, 5]

const bubbleSort = (nums) => {
    const { length } = nums

    for(let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            
            if(nums[j] < nums[j + 1]) {
                const temp = nums[j]

                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }


    return nums 
}


const res = bubbleSort(arr)

console.log(res)