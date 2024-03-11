/**
 * Verify if all the elements in the array exist within the set.
 *
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean} boolean
 */

export default function hasValuesFromArray (set, array) {
  if (!set instanceof Set) {
    throw new Error('set most be intance of set');
  }
  if (!array instanceof Set) {
    throw new Error('array most be intance of array');
  }
  return array.every((current) => set.has(current));
}
