

var expect = function(val) {
    const originalVal = val

    return {
        'toBe': function (newVal) {
            if(originalVal !== newVal) {
                throw new Error("Not Equal")
            } else return true
        },
        'notToBe': function (newVal) {
            if(originalVal === newVal) {
                throw new Error("Not Equal")
            } else return true
        }
    }    
};