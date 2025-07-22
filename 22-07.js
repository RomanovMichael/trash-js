// push(value) — положить значение

// pop() — извлечь верхний элемент

// peek() — посмотреть верхний, не удаляя

// isEmpty() — пуст ли стек

class Stack {
    constructor() {
        this.items = []
    }

    push(val) { 
        this.items.push(val)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }
    
    
    isEmpty() {
        return this.items.length === 0
    }
}

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.peek()); // 2
console.log(s.pop());  // 2
console.log(s.pop());  // 1
console.log(s.isEmpty()); // true