export default class HolbertonCourse {
  /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The names of students in the course.
     */
  constructor (name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * Gets the name of this course.
     */
  get name () {
    return this._name;
  }

  /**
     * Set value of name course.
     */
  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * Gets length of this course.
     */
  get length () {
    return this._length;
  }

  /**
     * Set value of length course.
     */
  set length (value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
     * Gets the students of this course.
     */
  get students () {
    return this._students;
  }

  /**
     * Set value of students course.
     */
  set students (value) {
    if (typeof value !== 'object') {
      throw new TypeError('Students must be a array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Student item must be a string');
    }
    this._students = value;
  }
}
