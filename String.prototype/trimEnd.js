/*
    * String.prototype.trimEnd()
    * - Takes no arguments.
    * - Returns a new string with whitespace characters removed from the end of the string.
    * - Special Cases:
    *     - If the string is empty (`''`), it returns `''` (no change).
    *     - If the string contains no trailing whitespace, it returns the original string.
    *     - The method does not affect leading whitespace characters.
    * - Examples:
    *   '   hello   '.trimEnd();       // '   hello' (trailing spaces removed)
    *   'hello'.trimEnd();             // 'hello' (no trailing spaces to remove)
    *   '   '.trimEnd();               // '' (string consisting only of spaces becomes empty)
    *   ''.trimEnd();                  // '' (empty string remains unchanged)
    *   'trim this!   '.trimEnd();     // 'trim this!' (trailing spaces removed)
*/

String.prototype.trimEnd2 = function() {
    if(this === '') return ''
    
    let end = this.length - 1
    while (end >= 0 && this.charAt(end) === ' ') {
        end--
    }

    return this.substring(0, end + 1)
}

console.log('   hello   '.trimEnd2()); // '   hello'
console.log('hello'.trimEnd2()); // 'hello'
console.log('   '.trimEnd2()); // ''
console.log(''.trimEnd2()); // ''
console.log('trim this!   '.trimEnd2()); // 'trim this!'


