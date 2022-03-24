// 测试

function debounce(fn, wait) {
    let timer = null;
    return function(...arg) {
        if(timer) return;
        timer = setTimeout(()=>{
            fn.apply(this, arg);
            timer = null
        }, wait)
    }
}
function throttle(fn, wait){
    let timer = null;
    return function(...arg) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, arg);
            timer = null
        }, wait)
    }
}