

const bubbleSort = (nums) => {
    const { length } = nums

    for(let i = 0; i < length; i++) {


        for (let j = 0; j < length - 1 - i; j++) {

            if(nums[j] > nums[j + 1]) {
                const temp = nums[j]

                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }


    return nums 

}

console.log(bubbleSort([0, 0, 1, 0, 3, 12]))