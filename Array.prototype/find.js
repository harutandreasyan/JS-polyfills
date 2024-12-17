/*
    * Array.prototype.find()
    * - Takes a callback function and an optional `thisArg`.
    * - Returns the first element that satisfies the callback condition.
    * - Returns `undefined` if no element satisfies the condition.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays.
    *     - Stops iterating as soon as it finds a matching element.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].find(x => x > 1);         // 2
    *   [1, , 3].find(x => x === undefined); // undefined
    *   [].find(x => x > 0);                // undefined
*/

Array.prototype.find2 = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for(let i = 0; i < this.length; ++i) {
        if(callback(this[i])) return this[i]
    }
    return undefined
}

console.log([1, 2, 3].find2(x => x > 1)); // 2
console.log([1, , 3].find2(x => x === undefined)); // undefined
console.log([].find2(x => x > 0)); // undefined
// console.log([1].find(4)); // TypeError
