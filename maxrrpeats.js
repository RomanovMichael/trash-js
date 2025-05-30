const maxRepeats = (nums) => {
    let current = 1
    let max= 1 


    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            current += 1
        } else {
            current = 1
        }

        if(current > max) {
            max = current
        }
    }

    return max
}


console.log(maxRepeats([1, 1, 2, 2, 2, 3, 3]))      // 👉 3 (три двойки подряд)
console.log(maxRepeats([4, 4, 4, 4, 4]))           // 👉 5
console.log(maxRepeats([1, 2, 3, 4, 5]))   
