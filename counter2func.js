var createCounter = function(init) {
    let initial = init;
    
    return {
        increment: () => ++initial,
        decrement: () => --initial,
        reset: () => initial = init
    }
};