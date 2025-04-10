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
 * The CartScriptAdd200ResponseResult model module.
 * @module model/CartScriptAdd200ResponseResult
 * @version 1.1
 */
class CartScriptAdd200ResponseResult {
    /**
     * Constructs a new <code>CartScriptAdd200ResponseResult</code>.
     * @alias module:model/CartScriptAdd200ResponseResult
     */
    constructor() { 
        
        CartScriptAdd200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartScriptAdd200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartScriptAdd200ResponseResult} obj Optional instance to populate.
     * @return {module:model/CartScriptAdd200ResponseResult} The populated <code>CartScriptAdd200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartScriptAdd200ResponseResult();

            if (data.hasOwnProperty('script_id')) {
                obj['script_id'] = ApiClient.convertToType(data['script_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CartScriptAdd200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CartScriptAdd200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['script_id'] && !(typeof data['script_id'] === 'string' || data['script_id'] instanceof String)) {
            throw new Error("Expected the field `script_id` to be a primitive type in the JSON string but got " + data['script_id']);
        }

        return true;
    }


}



/**
 * @member {String} script_id
 */
CartScriptAdd200ResponseResult.prototype['script_id'] = undefined;






export default CartScriptAdd200ResponseResult;

