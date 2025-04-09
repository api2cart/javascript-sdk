/**
 * API2Cart OpenAPI
 * API2Cart
 *
 * The version of the OpenAPI document: 1.1
 * Contact: contact@api2cart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AttributeUpdate200Response from '../model/AttributeUpdate200Response';
import AttributeValueDelete200Response from '../model/AttributeValueDelete200Response';

/**
* Bridge service.
* @module api/BridgeApi
* @version 1.1
*/
export default class BridgeApi {

    /**
    * Constructs a new BridgeApi. 
    * @alias module:api/BridgeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bridgeDelete operation.
     * @callback module:api/BridgeApi~bridgeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeValueDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * bridge.delete
     * Delete bridge from the store.
     * @param {module:api/BridgeApi~bridgeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeValueDelete200Response}
     */
    bridgeDelete(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttributeValueDelete200Response;
      return this.apiClient.callApi(
        '/bridge.delete.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bridgeDownload operation.
     * @callback module:api/BridgeApi~bridgeDownloadCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * bridge.download
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [whitelabel = false)] Identifies if there is a necessity to download whitelabel bridge.
     * @param {module:api/BridgeApi~bridgeDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    bridgeDownload(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'whitelabel': opts['whitelabel']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/zip'];
      let returnType = File;
      return this.apiClient.callApi(
        '/bridge.download.file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bridgeUpdate operation.
     * @callback module:api/BridgeApi~bridgeUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeUpdate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * bridge.update
     * Update bridge in the store.
     * @param {module:api/BridgeApi~bridgeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeUpdate200Response}
     */
    bridgeUpdate(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttributeUpdate200Response;
      return this.apiClient.callApi(
        '/bridge.update.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
