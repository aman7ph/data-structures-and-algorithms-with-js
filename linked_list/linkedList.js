import Node from './node.js';
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
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
        if (index >= this.length || index < 0 || index === undefined) {
            return undefined;
        } else {
            let temp = this.Head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        }
    }

    set(index, value) {
        // if (index >= this.length || index < 0) {
        //     return undefined;
        // } else {
        //     let temp = this.Head;
        //     for (let i = 0; i < index; i++) {
        //         temp = temp.next;
        //     }
        //     temp.value = value;
        //     return temp;
        // }
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        const newNode = new Node(value);
        if (index > this.length || index < 0 || index === undefined) {
            return false;
        } else if (index === 0) {
            newNode.next = this.Head;
            this.Head = newNode;
            this.length++;
            return this;
            //this.unsift(value);
        } else if (index === this.length) {
            this.Tail.next = newNode;
            this.Tail = newNode;
            this.length++;
            return this;
            //this.push(value);
        } else {
            let temp = this.Head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            //const temp = this.get(index - 1);
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index > this.length || index < 0 || index === undefined) {
            return undefined;
        } else if (index === 0) {
            let temp = this.Head;
            this.Head = this.Head.next;
            this.length--;
            if (this.length === 0) {
                this.Tail = null;
            }
            temp.next = null;
            return temp;
            //this.shift()
        } else if (index === this.length) {
            let temp = this.Head;
            let prev = temp;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.Tail = prev;
            this.Tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.Head = null;
                this.temp = null;
            }
            return temp;
            //this.pop()
        } else {
            let before = this.Head;
            for (let i = 0; i < index - 1; i++) {
                before = before.next;
            }
            //const before=this.get(index-1)
            const temp = before.next;
            before.next = temp.next;
            temp.next = null;
            this.length--;
            return temp;
        }
    }

    revers() {
        let temp = this.Head;
        this.Head = this.Tail; //revers tail and head
        this.Tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

const linklist = new LinkedList(11);
linklist.push(5);
linklist.push(4);
console.log(linklist);
