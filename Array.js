let Memory = require("./memory");

class Array {
    constructor() {
        this.length = 0;
        this.memory = new Memory;
        this.ptr = this.memory.allocate(this.length);
    }

    print() {
        // Create a temp arr var
        let tempArr = [];
        // Iterate through the current array memory assigning current value to temp arr var
        // Stop when you've reached arr.length
        for (let i = 0; i < this.length; i++) {
            tempArr[i] = this.memory.memory[i];
        }
        // Return temp arr var
        console.log(this.memory);
        console.log(tempArr);
        
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        this.memory.set(this.ptr + this.length, value);
        // console.log(Memory.this.memory);
        
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = this.memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        this.memory.copy(this.ptr, oldPtr, this.length);
        this.memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return this.memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = this.memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        this.memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        this.memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }


}

module.exports = Array;