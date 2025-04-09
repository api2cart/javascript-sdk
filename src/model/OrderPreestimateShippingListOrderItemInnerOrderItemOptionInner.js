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
 * The OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner model module.
 * @module model/OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner
 * @version 1.1
 */
class OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner {
    /**
     * Constructs a new <code>OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner</code>.
     * @alias module:model/OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner
     */
    constructor() { 
        
        OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner} obj Optional instance to populate.
     * @return {module:model/OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner} The populated <code>OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner();

            if (data.hasOwnProperty('order_item_option_name')) {
                obj['order_item_option_name'] = ApiClient.convertToType(data['order_item_option_name'], 'String');
            }
            if (data.hasOwnProperty('order_item_option_id')) {
                obj['order_item_option_id'] = ApiClient.convertToType(data['order_item_option_id'], 'String');
            }
            if (data.hasOwnProperty('order_item_option_value')) {
                obj['order_item_option_value'] = ApiClient.convertToType(data['order_item_option_value'], 'String');
            }
            if (data.hasOwnProperty('order_item_option_value_id')) {
                obj['order_item_option_value_id'] = ApiClient.convertToType(data['order_item_option_value_id'], 'String');
            }
            if (data.hasOwnProperty('order_item_option_used_in_combinations')) {
                obj['order_item_option_used_in_combinations'] = ApiClient.convertToType(data['order_item_option_used_in_combinations'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['order_item_option_name'] && !(typeof data['order_item_option_name'] === 'string' || data['order_item_option_name'] instanceof String)) {
            throw new Error("Expected the field `order_item_option_name` to be a primitive type in the JSON string but got " + data['order_item_option_name']);
        }
        // ensure the json data is a string
        if (data['order_item_option_id'] && !(typeof data['order_item_option_id'] === 'string' || data['order_item_option_id'] instanceof String)) {
            throw new Error("Expected the field `order_item_option_id` to be a primitive type in the JSON string but got " + data['order_item_option_id']);
        }
        // ensure the json data is a string
        if (data['order_item_option_value'] && !(typeof data['order_item_option_value'] === 'string' || data['order_item_option_value'] instanceof String)) {
            throw new Error("Expected the field `order_item_option_value` to be a primitive type in the JSON string but got " + data['order_item_option_value']);
        }
        // ensure the json data is a string
        if (data['order_item_option_value_id'] && !(typeof data['order_item_option_value_id'] === 'string' || data['order_item_option_value_id'] instanceof String)) {
            throw new Error("Expected the field `order_item_option_value_id` to be a primitive type in the JSON string but got " + data['order_item_option_value_id']);
        }

        return true;
    }


}



/**
 * Ordered Product Option Name. Where x is order item ID, y is order item option ID
 * @member {String} order_item_option_name
 */
OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.prototype['order_item_option_name'] = undefined;

/**
 * Product Option ID. Where x is order item ID, y is order item option ID
 * @member {String} order_item_option_id
 */
OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.prototype['order_item_option_id'] = undefined;

/**
 * Ordered product option value Where x is order item ID, y - order item option ID
 * @member {String} order_item_option_value
 */
OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.prototype['order_item_option_value'] = undefined;

/**
 * Product option value ID, where x is order item ID, y - order item option ID
 * @member {String} order_item_option_value_id
 */
OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.prototype['order_item_option_value_id'] = undefined;

/**
 * Product option used in combinations flag, where x is order item ID, y - order item option ID
 * @member {Boolean} order_item_option_used_in_combinations
 */
OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner.prototype['order_item_option_used_in_combinations'] = undefined;






export default OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner;

