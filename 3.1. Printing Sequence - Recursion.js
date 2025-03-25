/**
 * Given n, print n n-1 ... 1 1 2... n-1 n
 * Eg: n = 3, 3 2 1 1 2 3
 */

function sequence(n) {
  if (n === 0) return;
  console.log(n);
  sequence(n - 1);
  console.log(n);
}
sequence(3);
