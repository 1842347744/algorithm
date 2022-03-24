// 用对象设计哈希表
var MyHashSet = function() {
    this.hashContent = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hashContent[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.hashContent[key] && delete this.hashContent[key];
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (this.hashContent[key]) return true;
    return false;
};


// 用数组设计哈希表 性能很差
var MyHashSet = function() {
    this.hashContent = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
 MyHashSet.prototype.add = function(key) {
    const data = this.hashContent;
    for (let i = 0; data < array.length; i++) {
        if (data[i] === key) return null;
    }
    this.hashContent[data.length] = key;
};
/** 
 * @param {number} key
 * @return {void}
 */
 MyHashSet.prototype.remove = function(key) {
    const data = this.hashContent;
    for (let i = 0; data < array.length; i++) {
        if (data[i] === key)  this.hashContent.splice(i,1);
    }
};
/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
 MyHashSet.prototype.contains = function (key) {
    const data = this.hashContent;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === key) return true;
    }
    return false;
  };