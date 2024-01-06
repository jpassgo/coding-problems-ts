import MyNode from "../dataStructures/MyNode";
import Queue from "../dataStructures/Queue";

// Breadth first search works in a very similar way as depth first search does.
// The difference lies in the usage of a queue rather than a stack while stepping through the graph.

function breadFirstSearch(value: number, root: MyNode): boolean {
  let queue: Queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    let node = queue.dequeue();

    if (node?.getValue() === value) {
      return true;
    } else if (node!.getChildren()?.length > 0) {
      node!.getChildren().forEach(child => queue.enqueue(child));
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

console.log(breadFirstSearch(3, root));
console.log(breadFirstSearch(12, root));