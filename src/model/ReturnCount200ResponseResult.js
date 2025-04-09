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
 * The ReturnCount200ResponseResult model module.
 * @module model/ReturnCount200ResponseResult
 * @version 1.1
 */
class ReturnCount200ResponseResult {
    /**
     * Constructs a new <code>ReturnCount200ResponseResult</code>.
     * @alias module:model/ReturnCount200ResponseResult
     */
    constructor() { 
        
        ReturnCount200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnCount200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnCount200ResponseResult} obj Optional instance to populate.
     * @return {module:model/ReturnCount200ResponseResult} The populated <code>ReturnCount200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnCount200ResponseResult();

            if (data.hasOwnProperty('returns_count')) {
                obj['returns_count'] = ApiClient.convertToType(data['returns_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnCount200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnCount200ResponseResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} returns_count
 */
ReturnCount200ResponseResult.prototype['returns_count'] = undefined;






export default ReturnCount200ResponseResult;

