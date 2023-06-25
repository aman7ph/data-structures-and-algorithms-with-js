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

    pop() {
        if (!this.Head) {
            return undefined;
        } else {
            let temp = this.Tail;
            this.Tail = this.Tail.prev;
            this.Tail.next = null;
            temp.prev = null;
            this.length--;
            if (this.length === 0) {
                this.Head = null;
                this.Tail = null;
            }
            return temp;
        }
    }

    unshift(value) {
        const newNode = new DoubleLinkedList(value);
        if (!this.Head) {
            this.Head = newNode;
            this.Tail = newNode;
        } else {
            newNode.next = this.Head;
            this.Head.prev = newNode;
            this.Head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.Head) {
            return undefined;
        } else {
            let temp = this.Head;
            this.Head = this.Head.next;
            this.Head.prev = null;
            temp.next = null;
            this.length--;
            if (this.length === 0) {
                this.Head = null;
                this.Tail = null;
            }
        }
        return temp;
    }

    get(index) {
        if (index > this.length || index < 0 || index === undefined) {
            return undefined;
        } else {
        }
    }
}
