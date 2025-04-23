/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product
 * and return that product.
 * Eg: inputArray = [3, 6, -2, -5, 7, 3]
 * o/p = 21
 */

function adjacentElementProduct(inputArray) {
  let max = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const prod = inputArray[i] * inputArray[i + 1];
    if (prod > max) max = prod;
  }
  return max;
}
console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3]));
