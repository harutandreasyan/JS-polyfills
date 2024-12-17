/*
    * String.prototype.toUpperCase()
    * - Takes no arguments.
    * - Returns a new string with all characters converted to uppercase.
    * - Special Cases:
    *     - If the string contains mixed case characters, they are all converted to uppercase.
    *     - If the string is already in uppercase, it remains unchanged.
    *     - If the string is empty, it returns an empty string.
    * - Examples:
    *   'hello'.toUpperCase();          // 'HELLO' (converts all characters to uppercase)
    *   'HELLO'.toUpperCase();          // 'HELLO' (already in uppercase, remains unchanged)
    *   'hElLo'.toUpperCase();          // 'HELLO' (mix of uppercase and lowercase)
    *   ''.toUpperCase();               // '' (empty string returns empty string)
*/

String.prototype.toUpperCase2 = function() {
    if(this === '') return ''

    let result = ''
    for (let i = 0; i < this.length; ++i) {
        let charCode = this.charCodeAt(i)
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32)
        } else {
            result += this.charAt(i)
        }
    }
    return result
}

console.log('HELLO'.toUpperCase2()); // HELLO
console.log('Hello'.toUpperCase2()); // HELLO 
console.log('hElLo'.toUpperCase2()); // HELLO
console.log(''.toUpperCase2()); // ''