const arnum = [-1, 0, 1, 2, -1, -4]

const fn = (nums) => {
    const sum = 0
    const result = []
    const arr = nums.sort((a,b) => a - b)

    for (let i= 0; i < nums.length; i++) {
        const a = nums[i]
        if (i > 0 && nums[i] === nums[i - 1]) continue

        const left = nums[i + 1]
        const right =  nums[nums.length - 1]


        while(left < right) {

            const sum = nums[i] + left + right 
            if (sum === 0) {
                result.push(nums[i], left, right)
                
                while(left < right && nums[left] === nums[left + 1]) left++
                while(left < right && nums[right] === nums[right - 1]) right--
                
                left++
                right--
            } else if(sum < 0) { 
                left++
            } else {
                right--
            }
        }
    }

    return result
}

const l = fn(arnum)
