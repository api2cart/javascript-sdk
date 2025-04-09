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
 * The ProductChildItemCombination model module.
 * @module model/ProductChildItemCombination
 * @version 1.1
 */
class ProductChildItemCombination {
    /**
     * Constructs a new <code>ProductChildItemCombination</code>.
     * @alias module:model/ProductChildItemCombination
     */
    constructor() { 
        
        ProductChildItemCombination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductChildItemCombination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductChildItemCombination} obj Optional instance to populate.
     * @return {module:model/ProductChildItemCombination} The populated <code>ProductChildItemCombination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductChildItemCombination();

            if (data.hasOwnProperty('option_id')) {
                obj['option_id'] = ApiClient.convertToType(data['option_id'], 'String');
            }
            if (data.hasOwnProperty('option_value_id')) {
                obj['option_value_id'] = ApiClient.convertToType(data['option_value_id'], 'String');
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
     * Validates the JSON data with respect to <code>ProductChildItemCombination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductChildItemCombination</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['option_id'] && !(typeof data['option_id'] === 'string' || data['option_id'] instanceof String)) {
            throw new Error("Expected the field `option_id` to be a primitive type in the JSON string but got " + data['option_id']);
        }
        // ensure the json data is a string
        if (data['option_value_id'] && !(typeof data['option_value_id'] === 'string' || data['option_value_id'] instanceof String)) {
            throw new Error("Expected the field `option_value_id` to be a primitive type in the JSON string but got " + data['option_value_id']);
        }

        return true;
    }


}



/**
 * @member {String} option_id
 */
ProductChildItemCombination.prototype['option_id'] = undefined;

/**
 * @member {String} option_value_id
 */
ProductChildItemCombination.prototype['option_value_id'] = undefined;

/**
 * @member {Object} additional_fields
 */
ProductChildItemCombination.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ProductChildItemCombination.prototype['custom_fields'] = undefined;






export default ProductChildItemCombination;

