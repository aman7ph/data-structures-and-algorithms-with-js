import Node from './node';

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.Head = newNode;
        this.Tail = this.Head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.Head) {
            this.Head = newNode;
            this.Tail = newNode;
        } else {
            this.Tail.next = newNode;
            newNode.prev = this.Tail;
            this.Tail = newNode;
        }
        this.length++;
        return this;
    }
}
