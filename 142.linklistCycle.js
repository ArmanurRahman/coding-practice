class LinkList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printLintList(head) {
    if (!head) {
        return;
    }
    // let currentNode = head;
    // while (currentNode) {
    //     console.log(currentNode.value);
    //     currentNode = currentNode.next;
    // }
    console.log(head.value);
    printLintList(head.next);
}

const nums = [5, 4, 3, 2, 1];
const nodes = nums.reduce(
    (acc, currentValue) => new LinkList(currentValue, acc),
    null
);
printLintList(nodes);

function isCircleFound(head) {
    if (!head) {
        return null;
    }
    const seenNode = new Set();
    let currentNode = head;
    while (!seenNode.has(currentNode)) {
        if (!currentNode.next) {
            return null;
        }
        seenNode.add(currentNode);
        currentNode = currentNode.next;
    }
    return currentNode;
}
console.log(isCircleFound(nodes));
