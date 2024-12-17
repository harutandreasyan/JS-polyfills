/*
    * Array.prototype.findIndex()
    * - Takes a callback function and an optional `thisArg`.
    * - Returns the index of the first element that satisfies the callback condition.
    * - Returns `-1` if no element satisfies the condition.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Empty slots in sparse arrays behave the same as undefined
    *     - Stops iterating as soon as it finds a matching element.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].findIndex(x => x > 1);    // 1
    *   [1, , 3].findIndex(x => x === undefined); // -1
    *   [].findIndex(x => x > 0);           // -1
*/

Array.prototype.findIndex2 = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for(let i = 0; i < this.length; ++i) {
        if(callback(this[i])) return i
    }
    return -1
}

console.log([1, 2, 3].findIndex2(x => x > 1)); // 1
console.log([1, , 3].findIndex2(x => x === undefined)); // 1
console.log([].findIndex2(x => x > 0)); // -1
// console.log([1].findIndex2(5)); // TypeError
