/*
    * String.prototype.concat(...strings)
    * - Takes one or more arguments (`strings`) to concatenate to the original string.
    * - Converts non-string arguments to strings using `String()`.
    * - Returns a new string with all arguments appended in order.
    * - Does not modify the original string.
    * - Examples:
    *   'abc'.concat('def');           // 'abcdef'
    *   'abc'.concat(123, null, true); // 'abc123nulltrue'
    *   'abc'.concat({});              // 'abc[object Object]'  // Converts object to string
    *   ''.concat();                   // '' (empty string)
    *   ''.concat(undefined);          // 'undefined'
    *   ''.concat([]);                 // '' (empty string)
    *   ''.concat(false);              // 'false'
*/


String.prototype.concat2 = function(...args) {
    return [this, ...args].map(String).join('')
}

let str1 = 'Welcome '
let str2 = 'enjoy'

console.log(str1.concat2(str2)); // Welcome enjoy
console.log(str1.concat2(str2, ' abc', ' rfg', ' fjf')); // Welcome enjoy rfg fjf
console.log(str1.concat2(4)); // Welcome 4
console.log(str1.concat2({})); // Welcome [object Object] 
console.log(str1.concat2(null)); // Welcome null
console.log(str1.concat2(true)); // Welcome true
console.log(str1.concat2(4, 5)); // Welcome 45
console.log(str1.concat2([])); // Welcome
console.log(str1.concat2()); // Welcome

console.log(str1);  // Welcome
console.log(str2); // enjoy

