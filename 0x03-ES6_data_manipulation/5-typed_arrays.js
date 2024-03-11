/**
 * Create a new array of Int8 value at a specific position.
 *
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 * @returns {DataView} buffer
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  if (typeof value !== "number") {
    throw new TypeError("Value most be a number");
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
