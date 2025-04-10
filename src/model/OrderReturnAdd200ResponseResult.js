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
 * The OrderReturnAdd200ResponseResult model module.
 * @module model/OrderReturnAdd200ResponseResult
 * @version 1.1
 */
class OrderReturnAdd200ResponseResult {
    /**
     * Constructs a new <code>OrderReturnAdd200ResponseResult</code>.
     * @alias module:model/OrderReturnAdd200ResponseResult
     */
    constructor() { 
        
        OrderReturnAdd200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderReturnAdd200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderReturnAdd200ResponseResult} obj Optional instance to populate.
     * @return {module:model/OrderReturnAdd200ResponseResult} The populated <code>OrderReturnAdd200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReturnAdd200ResponseResult();

            if (data.hasOwnProperty('return_id')) {
                obj['return_id'] = ApiClient.convertToType(data['return_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderReturnAdd200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderReturnAdd200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['return_id'] && !(typeof data['return_id'] === 'string' || data['return_id'] instanceof String)) {
            throw new Error("Expected the field `return_id` to be a primitive type in the JSON string but got " + data['return_id']);
        }

        return true;
    }


}



/**
 * @member {String} return_id
 */
OrderReturnAdd200ResponseResult.prototype['return_id'] = undefined;






export default OrderReturnAdd200ResponseResult;

