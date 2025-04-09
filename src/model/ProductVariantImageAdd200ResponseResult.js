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
 * The ProductVariantImageAdd200ResponseResult model module.
 * @module model/ProductVariantImageAdd200ResponseResult
 * @version 1.1
 */
class ProductVariantImageAdd200ResponseResult {
    /**
     * Constructs a new <code>ProductVariantImageAdd200ResponseResult</code>.
     * @alias module:model/ProductVariantImageAdd200ResponseResult
     */
    constructor() { 
        
        ProductVariantImageAdd200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductVariantImageAdd200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariantImageAdd200ResponseResult} obj Optional instance to populate.
     * @return {module:model/ProductVariantImageAdd200ResponseResult} The populated <code>ProductVariantImageAdd200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantImageAdd200ResponseResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image_path')) {
                obj['image_path'] = ApiClient.convertToType(data['image_path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariantImageAdd200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariantImageAdd200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['image_path'] && !(typeof data['image_path'] === 'string' || data['image_path'] instanceof String)) {
            throw new Error("Expected the field `image_path` to be a primitive type in the JSON string but got " + data['image_path']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductVariantImageAdd200ResponseResult.prototype['id'] = undefined;

/**
 * @member {String} image_path
 */
ProductVariantImageAdd200ResponseResult.prototype['image_path'] = undefined;






export default ProductVariantImageAdd200ResponseResult;

