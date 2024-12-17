/*
    * Array.prototype.map()
    * - Takes a callback function and an optional `thisArg`.
    * - Creates a new array with the results of calling the callback on every element.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays.
    * - Examples:
    *   [1, 2, 3].map(x => x * 2);          // [2, 4, 6]
    *   [1, , 3].map(x => x + 1);           // [2, 4]
    *   [].map(x => x);                     // []
*/

Array.prototype.map2 = function(callback) {
    if (this == globalThis) {
        throw new TypeError('Array.prototype.forEach2 called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let res = [...this]
    for(let i = 0; i < res.length; ++i) {
        if(res[i] === undefined) continue
        callback(res[i], i)
    }
    return res
}

console.log([1, 2, 3].map(x => x * 2));
console.log([1, , 3].map(x => x + 1));
console.log([].map(x => x));


console.log([1, 2, 3].map2(x => x * 2)); // [2, 4, 6]
console.log([1, , 3].map2(x => x + 1)); // [ 1, undefined, 3 ]
console.log([].map2(x => x)); // []
// [1, 2, 3].map2(5); // TypeError
