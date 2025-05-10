
class Counter {
    constructor(init) {
        this.init = init,
        this.originalVal = this.init
    }

    increment() {
        this.originalVal +=1
        return this.originalVal
    }

    decrement() {
        this.originalVal -=1
        return this.originalVal
    }

    reset() {
        this.originalVal = this.init
        return this.originalVal
    }
}
var createCounter = function(init) {

};