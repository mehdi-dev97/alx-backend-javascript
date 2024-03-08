import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     * Create a new Sky High Building.
     *
     * @see {@link SkyHighBuilding}
     *
     * @param {Number} floors
     */
  constructor (sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
     * Get floors.
     */
  get floors () {
    return this._floors;
  }

  set floors (value) {
    this._floors = value;
  }

  evacuationWarningMessage () {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
