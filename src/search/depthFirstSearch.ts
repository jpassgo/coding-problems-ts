

// For depth first search we will utilize a stack to help us step through each nodes children.
//  We should be able to achieve this in O(n) since in the worst case we will visit each node once
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


function depthFirstSeach(root: MyNode): boolean {

  let stack: MyNode[] = [];
  stack.push(root);

  while (stack.)
  return false;
}