/** Chunk Array -
 *              Split the given array into smaller subarrays, where each subarray has size elements.
                The last subarray can have fewer elements if needed.

   arr = [1,2,3,4,5]
   size = 2
   [[1,2], [3,4], [5]]   // chunk

   Que - Given an array arr and an integer size, divide the array into multiple subarrays (chunks), where each subarray contains at most size elements.
        Return the list of these subarrays.
 */

var chunk = function (arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;

};

console.log(chunk([1, 9, 6, 3, 2], 2));               // [ [ 1, 9 ], [ 6, 3 ], [ 2 ] ]

