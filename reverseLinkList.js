const { createLinkList, printList } = require("./linkList");

const linkList = createLinkList(5, 4, 3, 2, 1);
// printList(linkList);

const reverse = (head) => {
    let current = head;
    let prev = null;

    while (current) {
        const tempCurrentNext = current.next;
        current.next = prev;
        prev = current;
        current = tempCurrentNext;
    }
    return prev;
};

// reverse(linkList);
printList(reverse(linkList));
