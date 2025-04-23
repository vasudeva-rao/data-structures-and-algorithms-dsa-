/**
 * You've been assigned a crew and each member has a unique ID consisting of alphanumeric characters.
 * Now, you're sifting through these IDs and need to find the first one that appears more than once in the array.
 * If every ID unique or the array is empty, just return an empty string.
 */

function findFirstDuplicateID(ids) {
  if (ids.length === 0) return "";
  let idSet = new Set();
  for (let id of ids) {
    if (idSet.has(id)) return id;
    else idSet.add(id);
  }
  // Return an empty string if no duplicate ids are found
  return "";
}

console.log(
  findFirstDuplicateID(["X123", "A456", "X123", "B789", "A456", "C111"])
); // Expected "X123"
console.log(findFirstDuplicateID(["Z999", "Y888", "Z999", "Y888"])); // Expected "Z999"
console.log(
  findFirstDuplicateID(["E100", "B200", "C300", "E100", "D400", "C300"])
); // Expected "E100"
