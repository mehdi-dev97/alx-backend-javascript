export default class Car {
  /**
   * Create new instance
   *
   * @see {@link Car}
   *
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Get brand.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Get motor.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Get color.
   */
  get color() {
    return this._color;
  }

  /**
   * Set brand.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Set motor.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Set color.
   */
  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
