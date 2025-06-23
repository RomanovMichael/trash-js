var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc, curr) => curr(acc), x)
    }
};

var compose1 = function(functions) {
    
    return function(x) {    
        let result = x

        for(let i = functions.length - 1;i >=0; i--) {
            result = functions[i](result)
        }

        return result
    }
};






