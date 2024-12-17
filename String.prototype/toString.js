/*
    * String.prototype.toString()
    * - Takes no arguments.
    * - Returns a string that represents the primitive value of the String object.
    * - Special Cases:
    *     - If called on a String object, it returns the primitive string value.
    *     - If called on a primitive string, it simply returns the same string.
    *     - Throws a TypeError if `this` is not a String object or primitive string.
    * - Examples:
    *       'hello'.toString();             // 'hello' (primitive string remains unchanged)
    *       new String('world').toString(); // 'world' (returns the primitive value of the String object)
    *       ''.toString();                  // '' (empty string remains unchanged)
    *       String.prototype.toString.call('foo');    // 'foo' (explicit call on a primitive string)
    *       String.prototype.toString.call(new String('bar')); // 'bar' (explicit call on a String object)
    *       String.prototype.toString.call(123);      // Throws TypeError: 123 is not a string
*/

String.prototype.toString2 = function() {
    if (typeof this === 'string') {
        return this
    }
    if (typeof this === 'object' && Object.prototype.toString.call(this) === '[object String]') {
        return this.valueOf()
    }
    throw new TypeError('String.prototype.toString2 requires that "this" be a String')
}

console.log('hello'.toString2()); // 'hello' 
console.log(new String('world').toString2()); // 'world'
console.log(''.toString2()); // ''
console.log(String.prototype.toString2.call('foo')); // 'foo'
console.log(String.prototype.toString2.call(new String('bar'))); // 'bar' 
// console.log(String.prototype.toString2.call(123)); // TypeError

