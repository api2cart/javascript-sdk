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
import OrderRefundAddItemsInner from './OrderRefundAddItemsInner';

/**
 * The OrderRefundAdd model module.
 * @module model/OrderRefundAdd
 * @version 1.1
 */
class OrderRefundAdd {
    /**
     * Constructs a new <code>OrderRefundAdd</code>.
     * @alias module:model/OrderRefundAdd
     */
    constructor() { 
        
        OrderRefundAdd.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['item_restock'] = false;
        obj['send_notifications'] = false;
        obj['is_online'] = false;
    }

    /**
     * Constructs a <code>OrderRefundAdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderRefundAdd} obj Optional instance to populate.
     * @return {module:model/OrderRefundAdd} The populated <code>OrderRefundAdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRefundAdd();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderRefundAddItemsInner]);
            }
            if (data.hasOwnProperty('total_price')) {
                obj['total_price'] = ApiClient.convertToType(data['total_price'], 'Number');
            }
            if (data.hasOwnProperty('shipping_price')) {
                obj['shipping_price'] = ApiClient.convertToType(data['shipping_price'], 'Number');
            }
            if (data.hasOwnProperty('fee_price')) {
                obj['fee_price'] = ApiClient.convertToType(data['fee_price'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('item_restock')) {
                obj['item_restock'] = ApiClient.convertToType(data['item_restock'], 'Boolean');
            }
            if (data.hasOwnProperty('send_notifications')) {
                obj['send_notifications'] = ApiClient.convertToType(data['send_notifications'], 'Boolean');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('is_online')) {
                obj['is_online'] = ApiClient.convertToType(data['is_online'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderRefundAdd</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderRefundAdd</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                OrderRefundAddItemsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }

        return true;
    }


}



/**
 * Defines the order for which the refund will be created.
 * @member {String} order_id
 */
OrderRefundAdd.prototype['order_id'] = undefined;

/**
 * Defines items in the order that will be refunded
 * @member {Array.<module:model/OrderRefundAddItemsInner>} items
 */
OrderRefundAdd.prototype['items'] = undefined;

/**
 * Defines order refund amount.
 * @member {Number} total_price
 */
OrderRefundAdd.prototype['total_price'] = undefined;

/**
 * Defines refund shipping amount.
 * @member {Number} shipping_price
 */
OrderRefundAdd.prototype['shipping_price'] = undefined;

/**
 * Specifies refund's fee price
 * @member {Number} fee_price
 */
OrderRefundAdd.prototype['fee_price'] = undefined;

/**
 * Refund reason, or some else message which assigned to refund.
 * @member {String} message
 */
OrderRefundAdd.prototype['message'] = undefined;

/**
 * Boolean, whether or not to add the line items back to the store inventory.
 * @member {Boolean} item_restock
 * @default false
 */
OrderRefundAdd.prototype['item_restock'] = false;

/**
 * Send notifications to customer after refund was created
 * @member {Boolean} send_notifications
 * @default false
 */
OrderRefundAdd.prototype['send_notifications'] = false;

/**
 * Specifies an order creation date in format Y-m-d H:i:s
 * @member {String} date
 */
OrderRefundAdd.prototype['date'] = undefined;

/**
 * Indicates whether refund type is online
 * @member {Boolean} is_online
 * @default false
 */
OrderRefundAdd.prototype['is_online'] = false;






export default OrderRefundAdd;

