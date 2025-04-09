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

/**
 * The CartConfig200ResponseResult model module.
 * @module model/CartConfig200ResponseResult
 * @version 1.1
 */
class CartConfig200ResponseResult {
    /**
     * Constructs a new <code>CartConfig200ResponseResult</code>.
     * @alias module:model/CartConfig200ResponseResult
     */
    constructor() { 
        
        CartConfig200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartConfig200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartConfig200ResponseResult} obj Optional instance to populate.
     * @return {module:model/CartConfig200ResponseResult} The populated <code>CartConfig200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartConfig200ResponseResult();

            if (data.hasOwnProperty('store_name')) {
                obj['store_name'] = ApiClient.convertToType(data['store_name'], 'String');
            }
            if (data.hasOwnProperty('store_url')) {
                obj['store_url'] = ApiClient.convertToType(data['store_url'], 'String');
            }
            if (data.hasOwnProperty('db_prefix')) {
                obj['db_prefix'] = ApiClient.convertToType(data['db_prefix'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CartConfig200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CartConfig200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['store_name'] && !(typeof data['store_name'] === 'string' || data['store_name'] instanceof String)) {
            throw new Error("Expected the field `store_name` to be a primitive type in the JSON string but got " + data['store_name']);
        }
        // ensure the json data is a string
        if (data['store_url'] && !(typeof data['store_url'] === 'string' || data['store_url'] instanceof String)) {
            throw new Error("Expected the field `store_url` to be a primitive type in the JSON string but got " + data['store_url']);
        }
        // ensure the json data is a string
        if (data['db_prefix'] && !(typeof data['db_prefix'] === 'string' || data['db_prefix'] instanceof String)) {
            throw new Error("Expected the field `db_prefix` to be a primitive type in the JSON string but got " + data['db_prefix']);
        }

        return true;
    }


}



/**
 * @member {String} store_name
 */
CartConfig200ResponseResult.prototype['store_name'] = undefined;

/**
 * @member {String} store_url
 */
CartConfig200ResponseResult.prototype['store_url'] = undefined;

/**
 * @member {String} db_prefix
 */
CartConfig200ResponseResult.prototype['db_prefix'] = undefined;






export default CartConfig200ResponseResult;

