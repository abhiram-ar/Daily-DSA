/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = new Map();
    
    return function(...args) {
        if(!map.has(JSON.stringify(args))){
            const b = fn(...args)
            map.set(JSON.stringify(args), b)
            return b;
        }
        else  return map.get(JSON.stringify(args))
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */