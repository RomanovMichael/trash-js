


// const pol = (str) => {
//     return str === str.split('').reverse().join('')
// }

const pol = (str) => { 
    let left = 0 
    let right = str.length - 1
    
    while(left < right) {


        if(str[left] === str[right]) {
            left++ 
            right--
        } else {
            return false
        }
    }

    return true
}

// const r = pol('rareeral')
const r = pol('lal')
console.log(r)
