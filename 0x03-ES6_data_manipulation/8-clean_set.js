/**
 * Set values that start with a specific string.
 *
 * @param {Set} set
 * @param {String} startString
 */

export default function cleanSet (set, startString) {
  if (!set instanceof Set || typeof startString !== 'string') {
    return '';
  }
  const final = [];
  if (startString.length > 0) {
    set.forEach((item) => {
      if (item.indexOf(startString) !== -1) {
        const start = item.indexOf(startString) + startString.length;
        final.push(item.slice(start));
      }
    });
  }
  return final.join('-');
}
