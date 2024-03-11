/**
 * Create set from an array.
 *
 * @param {Array} array
 * @returns
 */

export default function setFromArray (array) {
  if (!array instanceof Array) {
    throw new Error('Argument most be an array');
  }
  return new Set(array);
}
