// src/lib/Stack.ts
export class Stack {
  private items: any[] = [];

  push(item: any) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) throw new Error("Stack underflow");
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
