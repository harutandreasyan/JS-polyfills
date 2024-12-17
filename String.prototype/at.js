/*
    * String.prototype.at(index)
    * - Takes a single argument `index` (integer or convertible to integer).
    * - Supports negative indexing (e.g., -1 for the last character).
    * - Returns the character at the specified index.
    * - Returns `undefined` if `index` is out of range.
    * - Handles falsy values (`undefined`, `null`, `NaN`, `false`, etc.) as `0`.
    * Examples:
    *   'abc'.at(0);      // 'a'
    *   'abc'.at(-1);     // 'c'
    *   'abc'.at(3);      // undefined
    *   'abc'.at(NaN);    // 'a'
    *   'abc'.at(false);  // 'a'
    *   'abc'.at(null);   // 'a'
    *   'abc'.at(1.3);    // 'b'
    *   'abc'.at(-1.3);   // 'c'
*/

String.prototype.at2 = function(index) {
    index = Math.trunc(index) || 0
    if(index >= 0 && index < this.length) {
        return this.charAt(index)
    } 
    if(index < 0 && index >= -this.length) {
        return  this.charAt(this.length + index)
    }
    return undefined
}

let str = 'hello'
console.log(str.at2(0)); // h
console.log(str.at2(3)); // l
console.log(str.at2(6)); // undefined
console.log(str.at2(-1)); // o
console.log(str.at2(-6)); // undefined
console.log(str.at2(NaN)); // h
console.log(str.at2(false)); // h
console.log(str.at2()); // h
console.log(str.at2(1.3)); // e
console.log(str.at2(-1.3)); // o





