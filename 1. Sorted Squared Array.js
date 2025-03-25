/**
 * You are given an array of Integers in which each subsequent value is not less than the previous value.
 * Write a function that takes this array as an input and returns a new array with the squares of each
 * number sorted in ascending order.
 */

/**
 *  Clarifying Questions
 *  1. Is negative numbers can be there in array? -> YES, 0 as well.
 *  2. All integers distinct? -> Not necessarily (can be duplicates).
 *  3. Can an empty array of integers given as input? ->  YES, return empty array.
 */

/** Solution */
// Time: O(nlogn), space(O(n))
// const squaredSortedArray = (array) => {
//   return array.map((x) => x * x).sort((a, b) => a - b);
// };
// console.log(squaredSortedArray([1, 2, 3, 4]));
// console.log(squaredSortedArray([-3, -2, 0, 1, 2]));

// Time: O(n), space(O(n)), Two pointer Method
function squaredSortedArray(array) {
  let start = 0;
  let end = array.length - 1;

  let newArr = new Array(array.length).fill(0);

  for (let i = array.length - 1; i >= 0; i--) {
    const startSquared = array[start] * array[start];
    const endSquared = Math.pow(array[end], 2);

    if (startSquared > endSquared) {
      newArr[i] = startSquared;
      start++;
    } else {
      newArr[i] = endSquared;
      end--;
    }
  }
  return newArr;
}
console.log(squaredSortedArray([1, 2, 3, 4]));
console.log(squaredSortedArray([-3, -2, 0, 1, 2]));
console.log([]);
