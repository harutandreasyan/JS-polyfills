/*
    * Array.prototype.findLastIndex()
    * - Takes a callback function and an optional `thisArg`.
    * - Returns the index of the last element that satisfies the callback condition.
    * - Returns `-1` if no element satisfies the condition.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Empty slots in sparse arrays behave the same as undefined
    *     - Iterates from the end of the array to the beginning.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].findLastIndex(x => x > 1); // 2
    *   [1, , 3].findLastIndex(x => x === undefined); // 1
    *   [].findLastIndex(x => x > 0);        // -1
*/

Array.prototype.findLastIndex2 = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for(let i = this.length - 1; i >= 0; --i) {
        if(callback(this[i])) return i
    }
    return -1
}

console.log([1, 2, 3].findLastIndex2(x => x > 1)); // 2
console.log([1, , 3].findLastIndex2(x => x === undefined)); // 1
console.log([].findLastIndex2(x => x > 0)); // -1
// console.log([1].findLastIndex2(5)); // TypeError


