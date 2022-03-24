// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    if(height.length <= 2) {
        return 0;
    }
    let total = 0, lArr=[0],lmax= 0, rArr=[0], rmax = 0;
    for(let i = 1; i< height.length;i++) {
        lmax = Math.max(lmax, height[i-1] );
        lArr.push(lmax)
    }
    for(let i =height.length-2; i>=0 && i<height.length; i--) {
        rmax = Math.max(rmax, height[i+1]);
        rArr.unshift(rmax)
    }
    for(let i = 0; i< lArr.length; i++) {
        if((Math.min(lArr[i],rArr[i]) - height[i]) > 0){
            total += ((Math.min(lArr[i],rArr[i])) - height[i])
        }
    }
    return total
};