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
            this.Tail = newNode;
        } else {
            this.Tail.next = newNode;
            this.Tail = newNode;
        }
        this.length++;
        return this;
    }

    Pop() {
        if (!this.Head) {
            return undefined;
        } else {
            let temp = this.Head;
            let pre = this.Head;
            while (temp.next) {
                pre = temp;
                temp = temp.next;
            }
            this.Tail = pre;
            this.Tail.next = null;
            this.length--;
            if (this.length === 0) {
                //if the list hade only single node
                this.Head = null;
                this.temp = null;
            }
            return temp;
        }
    }

    Unsift(value) {
        const newNode = new Node(value);
        if (!this.Head) {
            this.Head = newNode;
            this.Tail = newNode;
        } else {
            newNode.next = this.Head;
            this.Head = newNode;
        }
        this.length++;
        return this;
    }

    Shift() {
        if (!this.Head) {
            return undefined;
        } else if (this.length === 1) {
            this.Head = null;
            this.Tail = null;
        } else {
            let temp = this.Head.next;
            this.Head = temp;
            this.length--;

            return temp;
        }
    }
}

const linklist = new LinkedList(11);
linklist.Push(5);
linklist.Push(4);
console.log(linklist);
