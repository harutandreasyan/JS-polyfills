/*
    * Array.prototype.filter()
    * - Takes a callback function and an optional `thisArg`.
    * - Creates a new array with all elements for which the callback returns `true`.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays (does not call the callback for empty slots).
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
    *   [1, , 3].filter(x => x !== undefined); // [1, 3]
    *   Array.prototype.filter.call({0: 10, 1: 15, length: 2}, x => x > 10); // [15]
    * - Additional Info:
    *     - The callback can accept other arguments besides `value`, `index`, and `array`.
*/


Array.prototype.filter2 = function(callback) {
    if (this == globalThis) {
        throw new TypeError('Array.prototype.filter called on null or undefined')
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function')
    }

    let res = []
    let array = Object(this)
    for(let i = 0; i < this.length; ++i) {
        if(this[i] === undefined) continue
        if(callback(this[i], i, array)) {
            res.push(this[i])
        }
    }
    return res
}

console.log([1, 2, 3, 4].filter2(x => x % 2 === 0)); // [ 2, 4 ]
console.log([1, , 3].filter2(x => x !== undefined)); // [ 1, 3 ]
console.log(Array.prototype.filter2.call({0: 10, 1: 15, length: 2}, x => x > 10)); // [ 15 ]
console.log([1,2,,4].filter2(item => item == undefined)); // []
// console.log([1].filter2(78)); // TypeError

// console.log([1,2,3].filter2.call(null, x => x % 2 === 0)); // TypeError
// console.log([1,2,3].filter2.call(undefined, x => x % 2 === 0)); // TypeError
