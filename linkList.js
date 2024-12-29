class LinkList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const createLinkList = (...numbers) =>
    numbers.reduce((acc, val) => new LinkList(val, acc), null);

function printList(head) {
    if (!head) {
        return;
    }
    console.log(head.value);
    printList(head.next);
}

module.exports = {
    createLinkList,
    printList,
};
