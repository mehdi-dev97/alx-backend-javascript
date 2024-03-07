export default class Building {
  /**
     * Create a new building @see {@link Building}
     *
     * @param {Number} sqft - Square Footage.
     */
  constructor (sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  /**
     * Get sqft.
     */
  get sqft () {
    return this._sqft;
  }

  /**
     * Set sqft.
     */
  set sqft (value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft muste be a number');
    }
    this._sqft = value;
  }
}
