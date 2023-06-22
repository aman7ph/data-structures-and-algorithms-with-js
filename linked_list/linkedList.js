import Node from './node.js';

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.Head = newNode;
        this.Tail = this.Head;
        this.length = 1;
    }

    Push(value) {
        const newNode = new Node(value);
        if (!this.Head) {
            this.Head = newNode;
            this.Tail = this.Head;
        } else {
            this.Tail.next = newNode;
            this.Tail = newNode;
        }
        this.length++;
        return this;
    }
}

const linklist = new LinkedList(11);
linklist.Push(5);
linklist.Push(4);
linklist.Push(3);
console.log(linklist);
