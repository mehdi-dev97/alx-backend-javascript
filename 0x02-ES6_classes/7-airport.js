export default class Airport {
  /**
   * Create a new airport
   *
   * @see {@link Airport}
   *
   * @param {String} name
   * @param {String} code
   */
  constructor (name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Get name
   */
  get name () {
    return this._name;
  }

  /**
   * Set name
   *
   * @param {String} value
   */
  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Get code
   */
  get code () {
    return this._code;
  }

  /**
   * Set code
   *
   * @param {String} value
   */
  set code (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get [Symbol.toStringTag] () {
    return this._code;
  }
}
