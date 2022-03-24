// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// api解法
 var smallestK = function(arr, k) {
    arr.sort((a, b) => a - b);
    return arr.slice(0, k);
};

// 快排

// function quickSort(arr){
//     quickSort(arr, left, right)
// }

// function partition( ) {

// }





