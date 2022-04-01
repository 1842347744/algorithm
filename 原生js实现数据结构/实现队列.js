class Queue {
    constructor(){
        this.count = 0;
        this.items = {}
    };
    // 添加元素
    add(item) {
        this.items[this.count] = item
        this.count++
    }
    // 移除元素
    remove(item) {
        if(this.isEmpty()) {
            return undefined
        }
        delete this.items[0];
        this.count--
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
}