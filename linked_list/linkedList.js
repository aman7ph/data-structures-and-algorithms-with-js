import Node from './node.js';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
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
            this.Tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
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

    unsift(value) {
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

    shift() {
        if (!this.Head) {
            return undefined;
        } else {
            let temp = this.Head;
            this.Head = this.Head.next;
            this.length--;
            if (this.length === 0) {
                this.Tail = null;
            }
            temp.next = null;
            return temp;
        }
    }

    get(index) {
        if (!this.Head || index >= this.length || index < 0) {
            return undefined;
        } else {
            let temp = this.Head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        }
    }
}

const linklist = new LinkedList(11);
linklist.Push(5);
linklist.Push(4);
console.log(linklist);
