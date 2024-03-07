export default class Currency {
  /**
     * Create a new @see {@link Currency}.
     *
     * @param {String} code - currrency iso code.
     * @param {String} name - currency name.
     */
  constructor (code, name) {
    this.code = code;
    this.name = name;
  }

  /**
     * Get currency code.
     */
  get code () {
    return this._code;
  }

  /**
     * Set new currency code.
     */
  set code (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code muste be a string');
    }
    this._code = value;
  }

  /**
     * Get currency name.
     */
  get name () {
    return this._name;
  }

  /**
     * Set currency name.
     */
  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name muste be a string');
    }
    this._name = value;
  }

  /**
     * display full currency description.
     */
  displayFullCurrency () {
    return `${this._name} (${this._code})`;
  }
}
