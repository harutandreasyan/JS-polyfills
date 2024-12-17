/*
    * Array.prototype.every()
    * - Takes a callback function and an optional `thisArg` as arguments.
    * - Executes the callback on each array element until it returns `false` or the end of the array is reached.
    * - Returns `true` if the callback returns a truthy value for all elements; otherwise, returns `false`.
    * - Does not modify the original array.
    * - Special Cases:
    *     - If the array is empty, it returns `true` by default (vacuous truth).
    *     - Skips holes in sparse arrays (does not call the callback for empty slots).
    *     - Stops iterating as soon as the callback returns `false` for any element.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].every(x => x > 0);            // true (all elements are greater than 0)
    *   [1, 2, 3].every(x => x > 2);            // false (not all elements are greater than 2)
    *   [].every(x => x > 0);                   // true (empty array always returns true)
    *   [1, , 3].every(x => x !== undefined);   // true (skips the empty slot)
    *   Array.prototype.every.call({0: 10, 1: 20, length: 2}, x => x > 5); // true
*/

Array.prototype.every2 = function(callback) {
    if(typeof callback !== "function") {
        throw new TypeError("Written callback is not a function!")
    }
    for(let i = 0; i < this.length; i++) {
        if(this[i] !== undefined && !callback(this[i])) return false
    }
    return true
}

let arr = [1, 2, 3, 4, 5]
console.log(arr.every2(elem => elem < 9)); // true
console.log(arr.every2(elem => elem > 3)); // false
console.log([].every2(elem => elem > 9));  // true
console.log(Array.prototype.every2.call({0: 10, 1: 20, length: 2}, x => x > 5)); // true
console.log([1, , 3].every2(x => x !== undefined)); // true


