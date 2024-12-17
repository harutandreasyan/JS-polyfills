/*
    * Array.prototype.toString()
    * - Converts the elements of an array to a string.
    * - Examples:
    *   const arr = [1, 2, 3];
    *   console.log(arr.toString()); // "1,2,3"
    * 
    *   const arr2 = [1, , 3];
    *   console.log(arr2.toString()); // "1,,3" (sparse array)
    * 
    * - Note:
    *   - The `join` method is used to convert array elements to a string, joining them with a comma.
    *   - If `join` is not defined, the default `toString` method of `Object` is used.
*/

Array.prototype.toString2 = function() {
    const array = Object(this)
    let func = array.join

    if (typeof func !== 'function') {
        func = Object.prototype.toString
    }

    return func.call(array)
}

const arr = [1, 2, 3];
console.log(arr.toString2()); // "1,2,3"

const arr1 = [1, 2, "a", "1a"];
console.log(arr1.toString2()); // "1,2,a,1a"
console.log(arr1); // [ 1, 2, 'a', '1a' ]

const arr2 = [1, , 3];
console.log(arr2.toString2()); // "1,,3"

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matrix.toString2()); // 1,2,3,4,5,6,7,8,9
  
console.log(Array.prototype.toString2.call({ join: () => 1 })); // 1
console.log(Array.prototype.toString2.call({ join: () => undefined })); // undefined
console.log(Array.prototype.toString2.call({ join: "not function" })); // "[object Object]"
