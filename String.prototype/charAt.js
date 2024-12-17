/*
    * String.prototype.charAt(index)
    * - Takes a single argument `index` (converted to an integer).
    * - Returns the character at the specified index.
    * - Returns an empty string ('') if `index` is out of range (negative or >= string length).
    * - Non-numeric or falsy `index` values (e.g., `undefined`, `null`, `NaN`, `false`) are treated as `0`.
    * Examples:
    *   'abc'.charAt(0);      // 'a'
    *   'abc'.charAt(2);      // 'c'
    *   'abc'.charAt(3);      // ''
    *   'abc'.charAt(-1);     // ''
    *   'abc'.charAt();       // 'a'
    *   'abc'.charAt(null);   // 'a'
    *   'abc'.charAt(false);  // 'a'
    *   'abc'.charAt(NaN);    // 'a'
    *   'abc'.charAt(2.7);    // 'c'
*/

String.prototype.charAt2 = function(index) {
    index = Math.trunc(index) || 0
    if(index >= 0 && index < this.length) {
        return this.slice(index, index + 1)
    } 
    return ''
}
    
let str = 'Hello'
console.log(str.charAt2()); // H
console.log(str.charAt2(0)); // H
console.log(str.charAt2(4)); // o
console.log(str.charAt2(-1)); // ''
console.log(str.charAt2(NaN)); // H
console.log(str.charAt2('')); // H
console.log(str.charAt2(null)); // H
console.log(str.charAt2(-4)); // ''
console.log(str.charAt2(false)); // H
console.log(str.charAt2(2.7)); // l


