class LinkList {
    constructor(value, next = null, prev = null, child = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

const buildMultiLevel = function (nodes) {
    const head = new LinkList(nodes[0]);
    let currentNode = head;
    for (i = 1; i < nodes.length; i++) {
        const val = nodes[i];
        let nextNode;
        if (Array.isArray(val)) {
            nextNode = buildMultiLevel(val);
            currentNode.child = nextNode;
            continue;
        }
        nextNode = new LinkList(val);
        currentNode.next = nextNode;
        nextNode.prev = currentNode;
        currentNode = nextNode;
    }
    return head;
};

const printListMulti = (head) => {
    if (!head) {
        return;
    }

    console.log(head.value);

    if (head.child) {
        printListMulti(head.child);
    }

    printListMulti(head.next);
};

const printList = (head) => {
    if (!head) {
        return;
    }
    console.log(head.value);
    printList(head.next);
};
const list = buildMultiLevel(nodes);

const flatter = (head) => {
    if (!head) {
        return head;
    }
    let currentNode = head;
    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            let tail = currentNode.child;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = currentNode.next;
            if (tail.next !== null) {
                tail.next.prev = tail;
            }
            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }

    return head;
};
printListMulti(list);
console.log("after flatten");
const flatList = flatter(list);
printList(flatList);
