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
import A2CDateTime from './A2CDateTime';

/**
 * The OrderStatusHistoryItem model module.
 * @module model/OrderStatusHistoryItem
 * @version 1.1
 */
class OrderStatusHistoryItem {
    /**
     * Constructs a new <code>OrderStatusHistoryItem</code>.
     * @alias module:model/OrderStatusHistoryItem
     */
    constructor() { 
        
        OrderStatusHistoryItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusHistoryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusHistoryItem} obj Optional instance to populate.
     * @return {module:model/OrderStatusHistoryItem} The populated <code>OrderStatusHistoryItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusHistoryItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('modified_time')) {
                obj['modified_time'] = A2CDateTime.constructFromObject(data['modified_time']);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
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
     * Validates the JSON data with respect to <code>OrderStatusHistoryItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusHistoryItem</code>.
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
        // validate the optional field `modified_time`
        if (data['modified_time']) { // data not null
          A2CDateTime.validateJSON(data['modified_time']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrderStatusHistoryItem.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrderStatusHistoryItem.prototype['name'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_time
 */
OrderStatusHistoryItem.prototype['modified_time'] = undefined;

/**
 * @member {Boolean} notify
 */
OrderStatusHistoryItem.prototype['notify'] = undefined;

/**
 * @member {String} comment
 */
OrderStatusHistoryItem.prototype['comment'] = undefined;

/**
 * @member {Object} additional_fields
 */
OrderStatusHistoryItem.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
OrderStatusHistoryItem.prototype['custom_fields'] = undefined;






export default OrderStatusHistoryItem;

