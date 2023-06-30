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
        const newNode = new Node(value);
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
            if (index < this.length / 2) {
                let temp = this.Head;
                for (let i = 0; i < index; i++) {
                    temp = temp.next;
                }
            } else {
                let temp = this.Tail;
                for (let i = this.length - 1; i > index; i--) {
                    temp = temp.prev;
                }
            }
            return temp;
        }
    }
    set(index, value) {
        if (index > this.length || index < 0 || index === undefined) {
            return false;
        } else {
            if (index < this.length / 2) {
                let temp = this.Head;
                for (let i = 0; i < index; i++) {
                    temp = temp.next;
                }
            } else {
                let temp = this.Tail;
                for (let i = this.length - 1; i > index; i++) {
                    temp = temp.prev;
                }
            }
            temp.value = value;
            return true;
        }
        // let temp=this.get(index)
        // if(temp){
        //     temp.value=value
        //     return true
        //}
        // return false
    }

    insert(index, value) {
        const newNode = new Node(value);
        if (index > this.length || index < 0 || index === undefined) {
            return false;
        } else {
            if (index === 0) {
                newNode.next = this.Head;
                this.Head.prev = newNode;
                this.Head = newNode;

                this.length++;
                //this.unshift(value)
            } else if (index === this.length) {
                this.Tail.next = newNode;
                newNode.prev = this.Tail;
                this.Tail = newNode;

                this.length++;
                //this.push()
            } else {
                let before = this.Head;
                for (let i = 0; i < index - 1; i++) {
                    before = before.next;
                }
                let after = before.next;
                newNode.next = after;
                after.prev = newNode;
                newNode.prev = before;
                before.next = newNode;

                this.length++;
                return true;
            }
        }
    }

    remove(index) {
        if (index > this.length || index < 0 || index === undefined) {
            return false;
        } else {
            if (index === 0) {
                this.shift();
            } else if ((index = this.length)) {
                this.pop();
            } else {
                let temp = this.get(index);
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
                temp.prev = null;
                temp.next = null;

                this.length--;
                return temp;
            }
        }
    }
}
