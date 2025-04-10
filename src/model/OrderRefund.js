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
import OrderStatusRefundItem from './OrderStatusRefundItem';

/**
 * The OrderRefund model module.
 * @module model/OrderRefund
 * @version 1.1
 */
class OrderRefund {
    /**
     * Constructs a new <code>OrderRefund</code>.
     * @alias module:model/OrderRefund
     */
    constructor() { 
        
        OrderRefund.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderRefund</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderRefund} obj Optional instance to populate.
     * @return {module:model/OrderRefund} The populated <code>OrderRefund</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRefund();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = ApiClient.convertToType(data['shipping'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('modified_time')) {
                obj['modified_time'] = A2CDateTime.constructFromObject(data['modified_time']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderStatusRefundItem]);
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
     * Validates the JSON data with respect to <code>OrderRefund</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderRefund</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `modified_time`
        if (data['modified_time']) { // data not null
          A2CDateTime.validateJSON(data['modified_time']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                OrderStatusRefundItem.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrderRefund.prototype['id'] = undefined;

/**
 * @member {Number} shipping
 */
OrderRefund.prototype['shipping'] = undefined;

/**
 * @member {Number} fee
 */
OrderRefund.prototype['fee'] = undefined;

/**
 * @member {Number} tax
 */
OrderRefund.prototype['tax'] = undefined;

/**
 * @member {Number} total
 */
OrderRefund.prototype['total'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_time
 */
OrderRefund.prototype['modified_time'] = undefined;

/**
 * @member {String} comment
 */
OrderRefund.prototype['comment'] = undefined;

/**
 * @member {Array.<module:model/OrderStatusRefundItem>} items
 */
OrderRefund.prototype['items'] = undefined;

/**
 * @member {Object} additional_fields
 */
OrderRefund.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
OrderRefund.prototype['custom_fields'] = undefined;






export default OrderRefund;

