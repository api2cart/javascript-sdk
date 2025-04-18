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
import OrderStatusHistoryItem from './OrderStatusHistoryItem';
import OrderStatusRefund from './OrderStatusRefund';

/**
 * The OrderStatus model module.
 * @module model/OrderStatus
 * @version 1.1
 */
class OrderStatus {
    /**
     * Constructs a new <code>OrderStatus</code>.
     * @alias module:model/OrderStatus
     */
    constructor() { 
        
        OrderStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatus} obj Optional instance to populate.
     * @return {module:model/OrderStatus} The populated <code>OrderStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('history')) {
                obj['history'] = ApiClient.convertToType(data['history'], [OrderStatusHistoryItem]);
            }
            if (data.hasOwnProperty('refund_info')) {
                obj['refund_info'] = OrderStatusRefund.constructFromObject(data['refund_info']);
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
     * Validates the JSON data with respect to <code>OrderStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatus</code>.
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
        if (data['history']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['history'])) {
                throw new Error("Expected the field `history` to be an array in the JSON data but got " + data['history']);
            }
            // validate the optional field `history` (array)
            for (const item of data['history']) {
                OrderStatusHistoryItem.validateJSON(item);
            };
        }
        // validate the optional field `refund_info`
        if (data['refund_info']) { // data not null
          OrderStatusRefund.validateJSON(data['refund_info']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrderStatus.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrderStatus.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/OrderStatusHistoryItem>} history
 */
OrderStatus.prototype['history'] = undefined;

/**
 * @member {module:model/OrderStatusRefund} refund_info
 */
OrderStatus.prototype['refund_info'] = undefined;

/**
 * @member {Object} additional_fields
 */
OrderStatus.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
OrderStatus.prototype['custom_fields'] = undefined;






export default OrderStatus;

