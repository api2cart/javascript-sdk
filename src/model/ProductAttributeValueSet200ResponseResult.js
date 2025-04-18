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
 * The ProductAttributeValueSet200ResponseResult model module.
 * @module model/ProductAttributeValueSet200ResponseResult
 * @version 1.1
 */
class ProductAttributeValueSet200ResponseResult {
    /**
     * Constructs a new <code>ProductAttributeValueSet200ResponseResult</code>.
     * @alias module:model/ProductAttributeValueSet200ResponseResult
     */
    constructor() { 
        
        ProductAttributeValueSet200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAttributeValueSet200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAttributeValueSet200ResponseResult} obj Optional instance to populate.
     * @return {module:model/ProductAttributeValueSet200ResponseResult} The populated <code>ProductAttributeValueSet200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAttributeValueSet200ResponseResult();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('attribute_id')) {
                obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'String');
            }
            if (data.hasOwnProperty('value_id')) {
                obj['value_id'] = ApiClient.convertToType(data['value_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAttributeValueSet200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAttributeValueSet200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['attribute_id'] && !(typeof data['attribute_id'] === 'string' || data['attribute_id'] instanceof String)) {
            throw new Error("Expected the field `attribute_id` to be a primitive type in the JSON string but got " + data['attribute_id']);
        }
        // ensure the json data is a string
        if (data['value_id'] && !(typeof data['value_id'] === 'string' || data['value_id'] instanceof String)) {
            throw new Error("Expected the field `value_id` to be a primitive type in the JSON string but got " + data['value_id']);
        }

        return true;
    }


}



/**
 * @member {String} product_id
 */
ProductAttributeValueSet200ResponseResult.prototype['product_id'] = undefined;

/**
 * @member {String} attribute_id
 */
ProductAttributeValueSet200ResponseResult.prototype['attribute_id'] = undefined;

/**
 * @member {String} value_id
 */
ProductAttributeValueSet200ResponseResult.prototype['value_id'] = undefined;






export default ProductAttributeValueSet200ResponseResult;

