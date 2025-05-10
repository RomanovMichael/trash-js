const arr = [1,2,3,4]

var reduce = function(nums, fn, init) {
    const hasInit = typeof init !== 'undefined'
    let accum = init ? init : nums[0]

    for(let i = hasInit ? 0 : 1; i<nums.length; i++){
        accum = fn(accum, nums[i])

        console.log(accum)
    }
    
    return accum 
};

const r = reduce(arr, (accum, curr) => { return accum + curr;})