/**
 * A class to set config methods to get env variables
 */
class Config {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_BASE_URL;
    this.accessToken = process.env.REACT_APP_ACCESS_TOKEN_SUPERHERO_API;
  }

  getURL() {
    return `${this.baseUrl}${this.accessToken}`;
  }
}

export default new Config();
