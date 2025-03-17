/*
Challenge name: Min Stack
Description: 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.						
push(x) – Push element x onto stack. pop() – Removes the element on top of the stack. 
top() – Get the top element. getMin() – Retrieve the minimum element in the stack. Here's a valuable tip:

Research how the stack process works in your technology and try to replicate it, forming your own data 
structure and everything that entails this process.
*/
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.getMin()) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.getMin()) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2

module.exports = MinStack;
