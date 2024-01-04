

class MyNode {

  private value: number; 
  private children: MyNode[];

  constructor(value: number) {
    this.value = value;
    this.children = []
  }

  addChild(child: MyNode) {
    this.children.push(child);
  }

  getChildren(): MyNode[] {
    return this.children;
  }

  getValue(): number {
    return this.value;
  }
}

export default MyNode;