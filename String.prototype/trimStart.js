/*
    * String.prototype.trimStart()
    * - Removes whitespace from the beginning of the string.
    * - Takes no arguments.
    * - Returns a new string with all leading whitespace characters removed.
    * - Special Cases:
    *     - If the string is empty or consists only of whitespace characters, it returns an empty string.
    *     - Non-whitespace characters at the beginning of the string remain unaffected.
    * - Examples:
    *   '   hello'.trimStart();         // 'hello'
    *   'world   '.trimStart();         // 'world   ' (spaces at the end are unaffected)
    *   '   '.trimStart();              // '' (only whitespace characters removed)
    *   'noSpace'.trimStart();          // 'noSpace' (no leading spaces)
    *   ''.trimStart();                 // '' (empty string returns empty string)
*/

String.prototype.trimStart2 = function() {
    if(this === '') return ''
    let start = 0

    while (start < this.length && this.charAt(start) === ' ') {
        start++
    }
    
    return this.substring(start)
}

console.log('   hello'.trimStart2()); // 'hello'
console.log('world   '.trimStart2()); // 'world   '
console.log('   '.trimStart2()); // ''
console.log('noSpace'.trimStart2()); // 'noSpace'
console.log(''.trimStart2()); // ''