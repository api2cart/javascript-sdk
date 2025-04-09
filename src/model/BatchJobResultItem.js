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
 * The BatchJobResultItem model module.
 * @module model/BatchJobResultItem
 * @version 1.1
 */
class BatchJobResultItem {
    /**
     * Constructs a new <code>BatchJobResultItem</code>.
     * @alias module:model/BatchJobResultItem
     */
    constructor() { 
        
        BatchJobResultItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchJobResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchJobResultItem} obj Optional instance to populate.
     * @return {module:model/BatchJobResultItem} The populated <code>BatchJobResultItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchJobResultItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], ['String']);
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
     * Validates the JSON data with respect to <code>BatchJobResultItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchJobResultItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['entity_id'] && !(typeof data['entity_id'] === 'string' || data['entity_id'] instanceof String)) {
            throw new Error("Expected the field `entity_id` to be a primitive type in the JSON string but got " + data['entity_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['warnings'])) {
            throw new Error("Expected the field `warnings` to be an array in the JSON data but got " + data['warnings']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
BatchJobResultItem.prototype['id'] = undefined;

/**
 * @member {String} status
 */
BatchJobResultItem.prototype['status'] = undefined;

/**
 * @member {String} entity_id
 */
BatchJobResultItem.prototype['entity_id'] = undefined;

/**
 * @member {Array.<String>} errors
 */
BatchJobResultItem.prototype['errors'] = undefined;

/**
 * @member {Array.<String>} warnings
 */
BatchJobResultItem.prototype['warnings'] = undefined;

/**
 * @member {Object} additional_fields
 */
BatchJobResultItem.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
BatchJobResultItem.prototype['custom_fields'] = undefined;






export default BatchJobResultItem;

