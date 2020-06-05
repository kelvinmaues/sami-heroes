import Request from "../index";

/**
 * A class with methods resources to interact with the back-end
 * This extends Request class to access other HTTP methods available
 */
class Heroes extends Request {
  /**
   * @param {String} heroId
   * @memberof Heroes
   * @returns {Promise}
   */
  async getHero(heroId) {
    const res = await this.get(`/${heroId}`);
    return res;
  }

  /**
   * @param {String} heroName
   * @memberof Heroes
   * @returns {Promise}
   */
  async getHeroByName(heroName) {
    const res = await this.get(`/search/${heroName}`);
    return res;
  }
}

export default new Heroes();
