/** @module Team
 * Class creating Team of Characters.
 */
export default class Team {
  /**
   * Create a point.
   * @param {set} members - Unique array of characters
   */
  constructor() {
    this.members = new Set();
  }

  /**
   * Adds unique Character to the Team
   * @param {object} character - instance of Character class
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Team already has character ${character.type} - ${character.name}`);
    } else {
      this.members.add(character);
    }
  }

  /**
   * Adds several unique Character to the Team
   * @param {object} characters - an array of Characters
   */
  addAll(...characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  /**
   * Transforms members Set to Array
   * @return {array} - formatted array of members
   */
  toArray() {
    return Array.from(this.members);
  }
}
