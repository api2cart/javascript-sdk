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

import ApiClient from '../ApiClient';
import WebhookList200ResponseResult from './WebhookList200ResponseResult';

/**
 * The WebhookList200Response model module.
 * @module model/WebhookList200Response
 * @version 1.1
 */
class WebhookList200Response {
    /**
     * Constructs a new <code>WebhookList200Response</code>.
     * @alias module:model/WebhookList200Response
     */
    constructor() { 
        
        WebhookList200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookList200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookList200Response} obj Optional instance to populate.
     * @return {module:model/WebhookList200Response} The populated <code>WebhookList200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookList200Response();

            if (data.hasOwnProperty('return_code')) {
                obj['return_code'] = ApiClient.convertToType(data['return_code'], 'Number');
            }
            if (data.hasOwnProperty('return_message')) {
                obj['return_message'] = ApiClient.convertToType(data['return_message'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = WebhookList200ResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookList200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookList200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['return_message'] && !(typeof data['return_message'] === 'string' || data['return_message'] instanceof String)) {
            throw new Error("Expected the field `return_message` to be a primitive type in the JSON string but got " + data['return_message']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          WebhookList200ResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {Number} return_code
 */
WebhookList200Response.prototype['return_code'] = undefined;

/**
 * @member {String} return_message
 */
WebhookList200Response.prototype['return_message'] = undefined;

/**
 * @member {module:model/WebhookList200ResponseResult} result
 */
WebhookList200Response.prototype['result'] = undefined;






export default WebhookList200Response;

