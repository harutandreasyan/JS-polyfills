/*
    * Array.prototype.forEach()
    * - Takes a callback function and an optional `thisArg`.
    * - Executes the callback on each element of the array.
    * - Does not return a new array.
    * - Modifies the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays (does not call the callback for empty slots).
    *     - Iterates through the entire array even if elements are modified in the callback.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].forEach((x, index) => console.log(index, x)); // Logs: 0 1, 1 2, 2 3
    *   [].forEach(x => console.log(x)); // No output (empty array)
*/


Array.prototype.forEach2 = function(callback) {
    if (this == globalThis) {
        throw new TypeError('Array.prototype.forEach2 called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for(let i = 0; i < this.length; ++i) {
        if(this[i] === undefined) continue
        callback(this[i], i)
    }
};

[1, 2, 3].forEach2((x, index) => console.log(index, x)); // 0 1, 1 2, 2 3
[1, 2, ,3].forEach2((x, index) => console.log(index, x)); // 0 1, 1 2, 2 3
[].forEach2(x => console.log(x)); // No output (empty array)
// [1, 2, 3].forEach2(5); // TypeError
