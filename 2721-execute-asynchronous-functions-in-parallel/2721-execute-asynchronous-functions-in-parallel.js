/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach( (func, i) => {
            func()
                .then(val => {
                    results[i] = val;
                    count ++
                    if(count === functions.length ) resolve(results)
                })
                .catch(reason => reject(reason))
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */