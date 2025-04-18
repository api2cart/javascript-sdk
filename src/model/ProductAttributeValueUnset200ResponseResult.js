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
 * The ProductAttributeValueUnset200ResponseResult model module.
 * @module model/ProductAttributeValueUnset200ResponseResult
 * @version 1.1
 */
class ProductAttributeValueUnset200ResponseResult {
    /**
     * Constructs a new <code>ProductAttributeValueUnset200ResponseResult</code>.
     * @alias module:model/ProductAttributeValueUnset200ResponseResult
     */
    constructor() { 
        
        ProductAttributeValueUnset200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAttributeValueUnset200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAttributeValueUnset200ResponseResult} obj Optional instance to populate.
     * @return {module:model/ProductAttributeValueUnset200ResponseResult} The populated <code>ProductAttributeValueUnset200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAttributeValueUnset200ResponseResult();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAttributeValueUnset200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAttributeValueUnset200ResponseResult</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} success
 */
ProductAttributeValueUnset200ResponseResult.prototype['success'] = undefined;






export default ProductAttributeValueUnset200ResponseResult;

