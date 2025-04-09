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
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.1
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:model/Webhook
     */
    constructor() { 
        
        Webhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('callback')) {
                obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
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
     * Validates the JSON data with respect to <code>Webhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Webhook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
            throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
        }
        // ensure the json data is a string
        if (data['fields'] && !(typeof data['fields'] === 'string' || data['fields'] instanceof String)) {
            throw new Error("Expected the field `fields` to be a primitive type in the JSON string but got " + data['fields']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['entity'] && !(typeof data['entity'] === 'string' || data['entity'] instanceof String)) {
            throw new Error("Expected the field `entity` to be a primitive type in the JSON string but got " + data['entity']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Webhook.prototype['id'] = undefined;

/**
 * @member {String} label
 */
Webhook.prototype['label'] = undefined;

/**
 * @member {String} store_id
 */
Webhook.prototype['store_id'] = undefined;

/**
 * @member {Boolean} active
 */
Webhook.prototype['active'] = undefined;

/**
 * @member {String} callback
 */
Webhook.prototype['callback'] = undefined;

/**
 * @member {String} fields
 */
Webhook.prototype['fields'] = undefined;

/**
 * @member {String} created_at
 */
Webhook.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Webhook.prototype['updated_at'] = undefined;

/**
 * @member {String} entity
 */
Webhook.prototype['entity'] = undefined;

/**
 * @member {String} action
 */
Webhook.prototype['action'] = undefined;

/**
 * @member {Object} additional_fields
 */
Webhook.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
Webhook.prototype['custom_fields'] = undefined;






export default Webhook;

