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
import CartClearCache200ResponseResult from './CartClearCache200ResponseResult';

/**
 * The CartClearCache200Response model module.
 * @module model/CartClearCache200Response
 * @version 1.1
 */
class CartClearCache200Response {
    /**
     * Constructs a new <code>CartClearCache200Response</code>.
     * @alias module:model/CartClearCache200Response
     */
    constructor() { 
        
        CartClearCache200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartClearCache200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartClearCache200Response} obj Optional instance to populate.
     * @return {module:model/CartClearCache200Response} The populated <code>CartClearCache200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartClearCache200Response();

            if (data.hasOwnProperty('return_code')) {
                obj['return_code'] = ApiClient.convertToType(data['return_code'], 'Number');
            }
            if (data.hasOwnProperty('return_message')) {
                obj['return_message'] = ApiClient.convertToType(data['return_message'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = CartClearCache200ResponseResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CartClearCache200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CartClearCache200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['return_message'] && !(typeof data['return_message'] === 'string' || data['return_message'] instanceof String)) {
            throw new Error("Expected the field `return_message` to be a primitive type in the JSON string but got " + data['return_message']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          CartClearCache200ResponseResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {Number} return_code
 */
CartClearCache200Response.prototype['return_code'] = undefined;

/**
 * @member {String} return_message
 */
CartClearCache200Response.prototype['return_message'] = undefined;

/**
 * @member {module:model/CartClearCache200ResponseResult} result
 */
CartClearCache200Response.prototype['result'] = undefined;






export default CartClearCache200Response;

