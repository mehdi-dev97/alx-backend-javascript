export default class HolbertonClass {
  /**
   * Create new instance
   *
   * @see {@link HolbertonClass}
   *
   * @param {Number} size
   * @param {String} location
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Get size.
   */
  get size() {
    return this._size;
  }

  /**
   * Set size.
   */
  set size(value) {
    if (typeof value !== "number") {
      throw new TypeError("Size must be a number");
    }
    this._size = value;
  }

  /**
   * Get location.
   */
  get location() {
    return this._location;
  }

  /**
   * Set location.
   */
  set location(value) {
    if (typeof value !== "string") {
      throw new TypeError("Location must be a number");
    }
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this._size;
    } else if (hint === "string") {
      return this._location;
    }
    return this;
  }
}
