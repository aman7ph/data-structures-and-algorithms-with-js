import Node from './node';

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.First = newNode;
        this.Last = newNode;

        this.length = 1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.First = newNode;
            this.Last = newNode;
        } else {
            this.Last.next = newNode;
            this.Last = newNode;
        }
        this.length++;

        return this;
    }
    dequeue() {
        if (this.length === 0) {
            return undefined;
        } else {
            let temp = this.First;
            this.First = this.First.next;
            temp.next = null;
            this.length--;
            if (this.length === 0) {
                this.First = null;
                this.Last = null;
            }
            return temp;
        }
    }
}
