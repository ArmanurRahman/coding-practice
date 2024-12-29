const { createLinkList, printList } = require("./linkList");

const linkList = createLinkList(5, 4, 3, 2, 1);

const reverse = (head, m, n) => {
    let start = head;
    let currentPosition = 1;
    let currentNode = head;

    while (currentPosition < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
    }

    let tail = currentNode;
    let newList = null;
    while (currentPosition >= m && currentPosition <= n) {
        let tempNext = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = tempNext;
        currentPosition++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (m > 1) {
        return head;
    } else {
        return newList;
    }
};
printList(linkList);
console.log("after reverse");
printList(reverse(linkList, 2, 4));
