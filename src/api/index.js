import Axios from "axios";
// import { REQ_BEGIN, REQ_ENDED, REQ_ERROR } from '@api/RequestActionType';
import Config from "../config";
import {
  REQ_BEGIN,
  REQ_ENDED,
  REQ_ERROR,
} from "../reducers_and_actions/request";

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
    const { store } = require("../store");
    // Intercepting request
    this.instance().interceptors.request.use(
      (config) => {
        store.dispatch({ type: REQ_BEGIN });
        return config;
      },
      (error) => {
        store.dispatch({ type: REQ_ERROR, error });
        return Promise.reject(error);
      }
    );

    // Intercepting response
    this.instance().interceptors.response.use(
      (resp) => {
        if (resp.data.error) {
          store.dispatch({ type: REQ_ERROR, error: resp.data.error });
        }
        store.dispatch({ type: REQ_ENDED });
        return resp;
      },
      (error) => {
        store.dispatch({ type: REQ_ERROR, err: error });
        return Promise.reject(error);
      }
    );

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
