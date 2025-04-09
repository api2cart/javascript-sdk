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
 * The StoreAttribute model module.
 * @module model/StoreAttribute
 * @version 1.1
 */
class StoreAttribute {
    /**
     * Constructs a new <code>StoreAttribute</code>.
     * @alias module:model/StoreAttribute
     */
    constructor() { 
        
        StoreAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoreAttribute} obj Optional instance to populate.
     * @return {module:model/StoreAttribute} The populated <code>StoreAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreAttribute();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('default_values')) {
                obj['default_values'] = ApiClient.convertToType(data['default_values'], ['String']);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('lang_id')) {
                obj['lang_id'] = ApiClient.convertToType(data['lang_id'], 'String');
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
     * Validates the JSON data with respect to <code>StoreAttribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StoreAttribute</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['default_values'])) {
            throw new Error("Expected the field `default_values` to be an array in the JSON data but got " + data['default_values']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['lang_id'] && !(typeof data['lang_id'] === 'string' || data['lang_id'] instanceof String)) {
            throw new Error("Expected the field `lang_id` to be a primitive type in the JSON string but got " + data['lang_id']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
StoreAttribute.prototype['id'] = undefined;

/**
 * @member {String} code
 */
StoreAttribute.prototype['code'] = undefined;

/**
 * @member {String} type
 */
StoreAttribute.prototype['type'] = undefined;

/**
 * @member {String} name
 */
StoreAttribute.prototype['name'] = undefined;

/**
 * @member {Array.<String>} default_values
 */
StoreAttribute.prototype['default_values'] = undefined;

/**
 * @member {Number} position
 */
StoreAttribute.prototype['position'] = undefined;

/**
 * @member {Boolean} visible
 */
StoreAttribute.prototype['visible'] = undefined;

/**
 * @member {Boolean} required
 */
StoreAttribute.prototype['required'] = undefined;

/**
 * @member {Boolean} system
 */
StoreAttribute.prototype['system'] = undefined;

/**
 * @member {Array.<String>} values
 */
StoreAttribute.prototype['values'] = undefined;

/**
 * @member {String} store_id
 */
StoreAttribute.prototype['store_id'] = undefined;

/**
 * @member {String} lang_id
 */
StoreAttribute.prototype['lang_id'] = undefined;

/**
 * @member {Object} additional_fields
 */
StoreAttribute.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
StoreAttribute.prototype['custom_fields'] = undefined;






export default StoreAttribute;

