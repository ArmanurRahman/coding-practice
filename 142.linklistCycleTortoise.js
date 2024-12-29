class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// ---- Generate our linked list ----
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
    (acc, val) => new ListNode(val, acc),
    null
);

let curr = linkedList,
    cycleNode;
while (curr.next !== null) {
    if (curr.val === 3) {
        cycleNode = curr;
    }

    curr = curr.next;
}

curr.next = cycleNode;

function isCircleFound(head) {
    if (!head) {
        return null;
    }
    let tortoiseTraverse = head;
    let hareTraverse = head;
    while (true) {
        tortoiseTraverse = tortoiseTraverse.next;
        hareTraverse = hareTraverse.next;
        if (hareTraverse === null || hareTraverse.next === null) {
            return null;
        } else {
            hareTraverse = hareTraverse.next;
        }
        if (tortoiseTraverse === hareTraverse) {
            break;
        }
    }
    let currentNode = tortoiseTraverse;
    let headNode = head;
    while (currentNode !== headNode) {
        currentNode = currentNode.next;
        headNode = headNode.next;
    }
    return currentNode;
}
console.log(isCircleFound(linkedList));
