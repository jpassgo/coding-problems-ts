import Stack from '../dataStructures/Stack';
import MyNode from '../dataStructures/MyNode';

// For depth first search we will utilize a stack to help us step through each nodes children.
//  We should be able to achieve this in O(n) since in the worst case we will visit each node once

function depthFirstSeach(root: MyNode, value: number): boolean {
  let stack: Stack<MyNode> = new Stack<MyNode>();

  stack.push(root);

  while (!stack.isEmpty()) {
    const node: MyNode = stack!.pop()!;
    if (value === node.getValue()) {
      return true;
    }

    for (const child of node.getChildren()) {
      stack.push(child);
    }
  }
  
  return false;
}

let one = new MyNode(1);
let two = new MyNode(2);
let three = new MyNode(3);
three.addChild(one);
three.addChild(two);

let four = new MyNode(4);
let five = new MyNode(5);
let six = new MyNode(6);
six.addChild(four);
six.addChild(five);

let root = new MyNode(10);
root.addChild(three);
root.addChild(six);

console.log(depthFirstSeach(root, 2));
console.log(depthFirstSeach(root, 17));