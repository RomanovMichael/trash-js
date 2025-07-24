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

// const s = new Stack();
// s.push(1);
// s.push(2);
// console.log(s.peek()); // 2
// console.log(s.pop());  // 2
// console.log(s.pop());  // 1
// console.log(s.isEmpty()); // true



// 🚀 Следующий уровень: MinStack
// 📌 Реализуй стек, в котором:

// push(x) кладёт число

// pop() извлекает

// top() показывает верхний

// getMin() — возвращает минимум за O(1)

class MinStack { 
    constructor() {
        this.items = []
        this.minItems = []
    }

    push(x) {
        this.items.push(x)

        if(this.minItems.length === 0 || x <= this.minItems[this.minItems.length - 1]) {
            this.minItems.push(x)
        }
    }

    pop() {
        const removed = this.items.pop()
        if(removed === this.minItems[this.minItems.length - 1]) {
            this.minItems.pop()
        }

        return removed
    }

    top() {
        return this.items[this.items.length - 1]
    } 

    getMin() {
        return this.minItems[this.minItems.length  - 1]
    }
}


const s = new MinStack();

s.push(5);
console.log(s)
console.log(s.getMin()); // 5

s.push(3);
console.log(s)
console.log(s.getMin()); // 3

s.push(7);
console.log(s)
console.log(s.getMin()); // 3

s.push(2);
console.log(s)
console.log(s.getMin()); // 2

s.pop();
console.log(s)
console.log(s.getMin()); // 3

s.pop();
console.log(s.getMin()); // 3

s.pop();
console.log(s.getMin()); // 5

s.pop();
console.log(s.getMin()); // undefined или ошибка, стек пуст
class MinStack extends Stack {
    constructor() {
      super(); // вызывает конструктор Stack
      this.minItems = [];
    }
  
    push(x) {
      super.push(x); // вызывает push из Stack
  
      if (
        this.minItems.length === 0 ||
        x <= this.minItems[this.minItems.length - 1]
      ) {
        this.minItems.push(x);
      }
    }
  
    pop() {
      const removed = super.pop(); // вызывает pop из Stack
  
      if (removed === this.minItems[this.minItems.length - 1]) {
        this.minItems.pop();
      }
  
      return removed;
    }
  
    getMin() {
      return this.minItems[this.minItems.length - 1];
    }
  }
  