/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * An array is monotone increasing if all its elements from left to right are non-decreasing.
 * An array is monotone decreasing if all its elements from left to right are non-increasing.
 * Given an integer array return true if the given array is monotonic, or false otherwise.
 */

/**
 * Clarifying Questions
 * 1. Is an empty array monotonic? -> YES
 * 2. Array with one integer monotonic? -> YES
 */

/** Solution */
// [1, _, _, _, 3] -> MI
// [3, _, _, _, 10] -> MD
// [4, _, _, 4] -> MI/MD all should be 4
// Time -> O(n), Space -> O(1)

function isMonotonicArray(array) {
  if (array.length === 0 || array.length === 1) return true;
  let isMI = array[1] >= array[0];
  let isMD = !isMI && array[1] <= array[0];

  for (let i = 1; i < array.length - 1; i++) {
    if (isMI && array[i + 1] < array[i]) return false;
    if (isMD && array[i + 1] > array[i]) return false;
  }
  return true;
}
console.log(isMonotonicArray([])); // True
console.log(isMonotonicArray([1, 2, 3, 4, 5])); // True
console.log(isMonotonicArray([5, 4, 3, 2, 1])); // True
console.log(isMonotonicArray([1, 3, 2, 4, 5])); // False
console.log(isMonotonicArray([1, 1, 1, 1, 1])); // True
console.log(isMonotonicArray([-3, 0, 1, 2])); // True
