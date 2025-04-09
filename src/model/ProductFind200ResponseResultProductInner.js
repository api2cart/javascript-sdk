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
 * The ProductFind200ResponseResultProductInner model module.
 * @module model/ProductFind200ResponseResultProductInner
 * @version 1.1
 */
class ProductFind200ResponseResultProductInner {
    /**
     * Constructs a new <code>ProductFind200ResponseResultProductInner</code>.
     * @alias module:model/ProductFind200ResponseResultProductInner
     */
    constructor() { 
        
        ProductFind200ResponseResultProductInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductFind200ResponseResultProductInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductFind200ResponseResultProductInner} obj Optional instance to populate.
     * @return {module:model/ProductFind200ResponseResultProductInner} The populated <code>ProductFind200ResponseResultProductInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductFind200ResponseResultProductInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductFind200ResponseResultProductInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductFind200ResponseResultProductInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductFind200ResponseResultProductInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductFind200ResponseResultProductInner.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ProductFind200ResponseResultProductInner.prototype['description'] = undefined;

/**
 * @member {Number} price
 */
ProductFind200ResponseResultProductInner.prototype['price'] = undefined;






export default ProductFind200ResponseResultProductInner;

