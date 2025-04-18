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
 * The ProductAttribute model module.
 * @module model/ProductAttribute
 * @version 1.1
 */
class ProductAttribute {
    /**
     * Constructs a new <code>ProductAttribute</code>.
     * @alias module:model/ProductAttribute
     */
    constructor() { 
        
        ProductAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAttribute} obj Optional instance to populate.
     * @return {module:model/ProductAttribute} The populated <code>ProductAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAttribute();

            if (data.hasOwnProperty('attribute_id')) {
                obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lang_id')) {
                obj['lang_id'] = ApiClient.convertToType(data['lang_id'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('attribute_group_id')) {
                obj['attribute_group_id'] = ApiClient.convertToType(data['attribute_group_id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('variant_id')) {
                obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'String');
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = ApiClient.convertToType(data['additional_fields'], Object);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAttribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAttribute</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attribute_id'] && !(typeof data['attribute_id'] === 'string' || data['attribute_id'] instanceof String)) {
            throw new Error("Expected the field `attribute_id` to be a primitive type in the JSON string but got " + data['attribute_id']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['lang_id'] && !(typeof data['lang_id'] === 'string' || data['lang_id'] instanceof String)) {
            throw new Error("Expected the field `lang_id` to be a primitive type in the JSON string but got " + data['lang_id']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['attribute_group_id'] && !(typeof data['attribute_group_id'] === 'string' || data['attribute_group_id'] instanceof String)) {
            throw new Error("Expected the field `attribute_group_id` to be a primitive type in the JSON string but got " + data['attribute_group_id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['variant_id'] && !(typeof data['variant_id'] === 'string' || data['variant_id'] instanceof String)) {
            throw new Error("Expected the field `variant_id` to be a primitive type in the JSON string but got " + data['variant_id']);
        }

        return true;
    }


}



/**
 * @member {String} attribute_id
 */
ProductAttribute.prototype['attribute_id'] = undefined;

/**
 * @member {String} code
 */
ProductAttribute.prototype['code'] = undefined;

/**
 * @member {String} name
 */
ProductAttribute.prototype['name'] = undefined;

/**
 * @member {String} lang_id
 */
ProductAttribute.prototype['lang_id'] = undefined;

/**
 * @member {String} store_id
 */
ProductAttribute.prototype['store_id'] = undefined;

/**
 * @member {String} value
 */
ProductAttribute.prototype['value'] = undefined;

/**
 * @member {Boolean} required
 */
ProductAttribute.prototype['required'] = undefined;

/**
 * @member {Boolean} visible
 */
ProductAttribute.prototype['visible'] = undefined;

/**
 * @member {String} type
 */
ProductAttribute.prototype['type'] = undefined;

/**
 * @member {Number} position
 */
ProductAttribute.prototype['position'] = undefined;

/**
 * @member {String} attribute_group_id
 */
ProductAttribute.prototype['attribute_group_id'] = undefined;

/**
 * @member {String} product_id
 */
ProductAttribute.prototype['product_id'] = undefined;

/**
 * @member {String} variant_id
 */
ProductAttribute.prototype['variant_id'] = undefined;

/**
 * @member {Object} additional_fields
 */
ProductAttribute.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ProductAttribute.prototype['custom_fields'] = undefined;






export default ProductAttribute;

