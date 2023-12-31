class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size); //This creates an array with a fixed length, where each element is initially set to undefined
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);

        return this;
    }

    get(key) {
        const index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (key === this.dataMap[index][i][0]) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    key() {
        let key = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                if (this.dataMap[i].length > 1) {
                    let key_collector = [];
                    for (let j = 0; j < this.dataMap[i].length; j++) {
                        key_collector.push(this.dataMap[i][j][0]);
                    }
                    key.push(key_collector);
                } else {
                    key.push(this.dataMap[i][0]);
                }
            }
        }

        return key;
    }
}
