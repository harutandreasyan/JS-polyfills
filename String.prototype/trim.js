/*
    * String.prototype.trim()
    * - Takes no arguments.
    * - Returns a new string with whitespace characters removed from both ends of the string.
    * - Special Cases:
    *     - If the string is empty, it returns an empty string.
    *     - If there are no leading or trailing whitespace characters, the string remains unchanged.
    * - Examples:
    *   '  hello  '.trim();           // 'hello' (whitespace removed from both ends)
    *   'hello'.trim();               // 'hello' (no change, no leading or trailing whitespace)
    *   '  hello'.trim();             // 'hello' (leading whitespace removed)
    *   'hello  '.trim();             // 'hello' (trailing whitespace removed)
    *   ''.trim();                    // '' (empty string returns empty string)
*/

String.prototype.trim2 = function() {
    if(this === '') return ''
    let start = 0
    let end = this.length - 1

    while (start <= end && this.charAt(start) === ' ') {
        start++
    }
    while (end >= start && this.charAt(end) === ' ') {
        end--
    }

    return this.substring(start, end + 1)
}

console.log('  hello  '.trim2()); // 'hello'
console.log('hello'.trim2()); // 'hello'
console.log('  hello'.trim2()); // 'hello'
console.log('hello  '.trim2()); // 'hello'
console.log(''.trim2()); // ''
