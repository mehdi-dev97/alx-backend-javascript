import Car from "./10-car";

export default class EVCar extends Car {
  /**
   * Create new instance
   *
   * @see {@link EVCar}
   *
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   * @param {String} range
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Get range
   */
  get range() {
    return this._range;
  }

  /**
   * Set range
   */
  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
