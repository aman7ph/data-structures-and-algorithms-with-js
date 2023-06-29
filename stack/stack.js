import Node from './node';

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.Top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Stack(value);
        if (this.length === 0) {
            this.Top = newNode;
        } else {
            newNode.next = this.Top;
            this.Top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        } else {
            let temp = this.Top;
            this.Top = temp.next;
            this.Top = this.Top.next;
            temp.next = null;
            this.length--;
            if (this.length === 0) {
                this.Top = null;
            }
            return temp;
        }
    }
}
