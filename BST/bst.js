import Node from './node';

class BST {
    constructor(value) {
        const newNode = new Node(value);
        this.Root = newNode;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.Root) {
            this.Root = newNode;

            return this;
        } else {
            let temp = this.Root;
            while (true) {
                if (newNode.value === temp.value) {
                    return undefined;
                } else {
                    if (newNode.value < temp.value) {
                        if (!temp.Left) {
                            temp.Left = newNode;
                            return this;
                        } else {
                            temp = temp.Left;
                        }
                    } else {
                        if (!temp.Right) {
                            temp.Right = newNode;
                            return this;
                        } else {
                            temp = temp.Right;
                        }
                    }
                }
            }
        }
    }

    contains(value) {
        if (!this.Root) {
            return false;
        } else {
            let temp = this.Root;
            while (temp) {
                if (value === temp.value) {
                    return true;
                } else if (value < temp.value) {
                    temp = temp.Left;
                } else {
                    temp = temp.Right;
                }
            }
            return false;
        }
    }
}

const B_S_T = new BST(50);
B_S_T.insert(55);
B_S_T.insert(51);
B_S_T.insert(91);

B_S_T.insert(5);
B_S_T.insert(31);
B_S_T.insert(45);
