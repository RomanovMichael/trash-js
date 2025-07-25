
const map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}

const isValid = (str) => {
    const stack = []

    for (char of str) {

        if(map[char]) {
            stack.push(char)
        } else {
            const last = stack.pop()

            if( map[last] !== map[char]) {
                return false
            }
        }
    }

    return stack.length === 0
}

isValid("()")       // true
isValid("()[]{}")   // true
isValid("(]")       // false
isValid("([)]")     // false
isValid("{[]}")     // true



const removeDuplicates = (str) => {
    const stack = []

    for (let char of str) {
        if(stack[stack.length - 1] !== char) {
            stack.push(char)
        } else {
            stack.pop()
        }
    }

    return stack.join('')
}

console.log(removeDuplicates("abbaca")) //"ca"