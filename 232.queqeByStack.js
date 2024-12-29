class Queue {
    constructor() {
        this.in = [];
        this.out = [];
    }
    enqueue(value) {
        this.in.push(value);
    }
    dequeue() {
        if (!this.out.length) {
            while (this.in.length) {
                this.out.push(this.in.pop());
            }
        }
        return this.out.pop();
    }
    peek() {
        if (!this.out.length) {
            while (this.in.length) {
                this.out.push(this.in.pop());
            }
        }
        return this.out[this.out.length - 1];
    }
    empty() {
        if (this.in.length !== 0 || this.out.length !== 0) {
            return false;
        }
        return true;
    }
}
const a = new Queue();
a.enqueue(1);
a.enqueue(2);
console.log(a.peek());
// a.enqueue(3);
// a.enqueue(4);
// a.enqueue(5);
// a.enqueue(6);
a.dequeue();

console.log(a);
console.log(a.empty());
