
// 基于数组实现栈
class Queue {
    constructor(){
        this.items = [];
    }
    // 添加元素
    push(item){
        this.items.push(item)
    }
    // 从栈顶删除元素
    pop(){
        this.items.pop()
    }
    // 返回栈是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回栈的大小
    size() {
        return this.items.length
    }
    // 返回栈的顶部元素
    peek() {
        return this.items[this.items.length-1]
    }
    // 清空栈
    clear(){
        this.items = []
    }
}

// 基于对象实现栈

class Queue {
    constructor(){
        this.items = {};
        this.count = 0;
    }
    // 添加元素
    push(item){
        this.items[this.count] = item
        this.count++
    }
    // 从栈顶删除元素
    pop(){
        if(this.isEmpty()) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
    }
    // 返回栈是否为空
    isEmpty(){
        return this.count === 0
    }
    // 返回栈的大小
    size() {
        return this.count
    }
    // 返回栈的顶部元素
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count-1]
    }
    // 清空栈
    clear(){
        this.items = {};
        this.count = 0;
    }
}