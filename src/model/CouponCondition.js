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
 * The CouponCondition model module.
 * @module model/CouponCondition
 * @version 1.1
 */
class CouponCondition {
    /**
     * Constructs a new <code>CouponCondition</code>.
     * @alias module:model/CouponCondition
     */
    constructor() { 
        
        CouponCondition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCondition} obj Optional instance to populate.
     * @return {module:model/CouponCondition} The populated <code>CouponCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCondition();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('match_items')) {
                obj['match_items'] = ApiClient.convertToType(data['match_items'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('logic_operator')) {
                obj['logic_operator'] = ApiClient.convertToType(data['logic_operator'], 'String');
            }
            if (data.hasOwnProperty('sub-conditions')) {
                obj['sub-conditions'] = ApiClient.convertToType(data['sub-conditions'], [CouponCondition]);
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
     * Validates the JSON data with respect to <code>CouponCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CouponCondition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['entity'] && !(typeof data['entity'] === 'string' || data['entity'] instanceof String)) {
            throw new Error("Expected the field `entity` to be a primitive type in the JSON string but got " + data['entity']);
        }
        // ensure the json data is a string
        if (data['match_items'] && !(typeof data['match_items'] === 'string' || data['match_items'] instanceof String)) {
            throw new Error("Expected the field `match_items` to be a primitive type in the JSON string but got " + data['match_items']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['logic_operator'] && !(typeof data['logic_operator'] === 'string' || data['logic_operator'] instanceof String)) {
            throw new Error("Expected the field `logic_operator` to be a primitive type in the JSON string but got " + data['logic_operator']);
        }
        if (data['sub-conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sub-conditions'])) {
                throw new Error("Expected the field `sub-conditions` to be an array in the JSON data but got " + data['sub-conditions']);
            }
            // validate the optional field `sub-conditions` (array)
            for (const item of data['sub-conditions']) {
                CouponCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
CouponCondition.prototype['id'] = undefined;

/**
 * @member {String} entity
 */
CouponCondition.prototype['entity'] = undefined;

/**
 * @member {String} match_items
 */
CouponCondition.prototype['match_items'] = undefined;

/**
 * @member {String} key
 */
CouponCondition.prototype['key'] = undefined;

/**
 * @member {String} operator
 */
CouponCondition.prototype['operator'] = undefined;

/**
 * @member {String} value
 */
CouponCondition.prototype['value'] = undefined;

/**
 * @member {String} logic_operator
 */
CouponCondition.prototype['logic_operator'] = undefined;

/**
 * @member {Array.<module:model/CouponCondition>} sub-conditions
 */
CouponCondition.prototype['sub-conditions'] = undefined;

/**
 * @member {Object} additional_fields
 */
CouponCondition.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
CouponCondition.prototype['custom_fields'] = undefined;






export default CouponCondition;

