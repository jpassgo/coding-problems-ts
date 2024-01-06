import MyNode from "./MyNode";

class Queue {

  private items: MyNode[] = [];

  enqueue(item: MyNode) {
    this.items.unshift(item);
  }

  dequeue(): MyNode | undefined {
    if (this.items.length > 0) {
      const dequeuedValue = this.items[0];
      this.items.shift();
      return dequeuedValue;
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.items.length < 1;
  }

  peek(): MyNode | undefined {
    if (this.items.length > 0) {
      return this.items[0];
    }
  }

  size(): number {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

}

export default Queue;