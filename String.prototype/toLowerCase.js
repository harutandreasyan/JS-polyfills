/*
    * String.prototype.toLowerCase()
    * - Takes no arguments.
    * - Returns a new string with all characters converted to lowercase.
    * - Special Cases:
    *     - If the string contains mixed case characters, they are all converted to lowercase.
    *     - If the string is already in lowercase, it remains unchanged.
    *     - If the string is empty, it returns an empty string.
    * - Examples:
    *   'Hello'.toLowerCase();          // 'hello' (converts all characters to lowercase)
    *   'HELLO'.toLowerCase();          // 'hello' (all uppercase letters converted)
    *   'hElLo'.toLowerCase();          // 'hello' (mix of uppercase and lowercase)
    *   ''.toLowerCase();               // '' (empty string returns empty string)
*/

String.prototype.toLowerCase2 = function() {
    if(this === '') return ''

    let result = ''
    for (let i = 0; i < this.length; ++i) {
        let charCode = this.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32)
        } else {
            result += this.charAt(i)
        }
    }
    return result
}

console.log('HELLO'.toLowerCase2()); // hello
console.log('Hello'.toLowerCase2()); // hello
console.log('hElLo'.toLowerCase2()); // hello
console.log(''.toLowerCase2()); // ''




