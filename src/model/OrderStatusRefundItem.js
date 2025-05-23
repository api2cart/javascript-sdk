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
 * The OrderStatusRefundItem model module.
 * @module model/OrderStatusRefundItem
 * @version 1.1
 */
class OrderStatusRefundItem {
    /**
     * Constructs a new <code>OrderStatusRefundItem</code>.
     * @alias module:model/OrderStatusRefundItem
     */
    constructor() { 
        
        OrderStatusRefundItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusRefundItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusRefundItem} obj Optional instance to populate.
     * @return {module:model/OrderStatusRefundItem} The populated <code>OrderStatusRefundItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusRefundItem();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('variant_id')) {
                obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'String');
            }
            if (data.hasOwnProperty('order_product_id')) {
                obj['order_product_id'] = ApiClient.convertToType(data['order_product_id'], 'String');
            }
            if (data.hasOwnProperty('qty')) {
                obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
            }
            if (data.hasOwnProperty('refund')) {
                obj['refund'] = ApiClient.convertToType(data['refund'], 'Number');
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
     * Validates the JSON data with respect to <code>OrderStatusRefundItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusRefundItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['variant_id'] && !(typeof data['variant_id'] === 'string' || data['variant_id'] instanceof String)) {
            throw new Error("Expected the field `variant_id` to be a primitive type in the JSON string but got " + data['variant_id']);
        }
        // ensure the json data is a string
        if (data['order_product_id'] && !(typeof data['order_product_id'] === 'string' || data['order_product_id'] instanceof String)) {
            throw new Error("Expected the field `order_product_id` to be a primitive type in the JSON string but got " + data['order_product_id']);
        }

        return true;
    }


}



/**
 * @member {String} product_id
 */
OrderStatusRefundItem.prototype['product_id'] = undefined;

/**
 * @member {String} variant_id
 */
OrderStatusRefundItem.prototype['variant_id'] = undefined;

/**
 * @member {String} order_product_id
 */
OrderStatusRefundItem.prototype['order_product_id'] = undefined;

/**
 * @member {Number} qty
 */
OrderStatusRefundItem.prototype['qty'] = undefined;

/**
 * @member {Number} refund
 */
OrderStatusRefundItem.prototype['refund'] = undefined;

/**
 * @member {Object} additional_fields
 */
OrderStatusRefundItem.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
OrderStatusRefundItem.prototype['custom_fields'] = undefined;






export default OrderStatusRefundItem;

