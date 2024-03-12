/**
 * Update item from given map.
 *
 * @param {Map} map
 */

export default function updateUniqueItems (map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((item, key) => {
    if (item === 1) {
      map.set(key, 100);
    }
  });
}
