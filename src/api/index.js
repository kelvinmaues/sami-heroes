import Axios from "axios";
// import { REQ_BEGIN, REQ_ENDED, REQ_ERROR } from '@api/RequestActionType';
import Config from "../config";

/**
 * A class with HTTP methods to a REST API in back-end
 */
export default class Request {
  constructor() {
    this._instance = null;
  }

  instance() {
    if (this._instance === undefined || this._instance === null) {
      this._instance = Axios.create({
        baseURL: Config.getURL(),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }

    return this._instance;
  }

  axios() {
    return this.instance();
  }

  /**
   * @param {String} url
   * @returns {Promise}
   */
  async get(url) {
    return this.axios().get(url);
  }

  // Async methods to HTTP requests

  /**
   * @param {String} url
   * @param {Object} params
   * @returns {Promise}
   */
  // async post(url, params = {}) {
  //   return this.axios().post(url, params);
  // }

  /**
   * @param {String} url
   * @param {Object} params
   * @returns {Promise}
   */
  // async put(url, params = {}) {
  //   return this.axios().put(url, params);
  // }

  /**
   * @param {String} url
   * @param {Object} params
   * @returns {Promise}
   */
  // async delete(url, params = {}) {
  //   return this.axios().delete(url, params);
  // }
}
