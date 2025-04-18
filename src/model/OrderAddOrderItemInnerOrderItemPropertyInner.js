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
 * The OrderAddOrderItemInnerOrderItemPropertyInner model module.
 * @module model/OrderAddOrderItemInnerOrderItemPropertyInner
 * @version 1.1
 */
class OrderAddOrderItemInnerOrderItemPropertyInner {
    /**
     * Constructs a new <code>OrderAddOrderItemInnerOrderItemPropertyInner</code>.
     * @alias module:model/OrderAddOrderItemInnerOrderItemPropertyInner
     */
    constructor() { 
        
        OrderAddOrderItemInnerOrderItemPropertyInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderAddOrderItemInnerOrderItemPropertyInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderAddOrderItemInnerOrderItemPropertyInner} obj Optional instance to populate.
     * @return {module:model/OrderAddOrderItemInnerOrderItemPropertyInner} The populated <code>OrderAddOrderItemInnerOrderItemPropertyInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAddOrderItemInnerOrderItemPropertyInner();

            if (data.hasOwnProperty('order_item_property_name')) {
                obj['order_item_property_name'] = ApiClient.convertToType(data['order_item_property_name'], 'String');
            }
            if (data.hasOwnProperty('order_item_property_value')) {
                obj['order_item_property_value'] = ApiClient.convertToType(data['order_item_property_value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderAddOrderItemInnerOrderItemPropertyInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderAddOrderItemInnerOrderItemPropertyInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['order_item_property_name'] && !(typeof data['order_item_property_name'] === 'string' || data['order_item_property_name'] instanceof String)) {
            throw new Error("Expected the field `order_item_property_name` to be a primitive type in the JSON string but got " + data['order_item_property_name']);
        }
        // ensure the json data is a string
        if (data['order_item_property_value'] && !(typeof data['order_item_property_value'] === 'string' || data['order_item_property_value'] instanceof String)) {
            throw new Error("Expected the field `order_item_property_value` to be a primitive type in the JSON string but got " + data['order_item_property_value']);
        }

        return true;
    }


}



/**
 * Ordered product property name. Where x is order item ID, y is order item property ID
 * @member {String} order_item_property_name
 */
OrderAddOrderItemInnerOrderItemPropertyInner.prototype['order_item_property_name'] = undefined;

/**
 * Ordered product property value. Where x is order item ID, y - order item property ID
 * @member {String} order_item_property_value
 */
OrderAddOrderItemInnerOrderItemPropertyInner.prototype['order_item_property_value'] = undefined;






export default OrderAddOrderItemInnerOrderItemPropertyInner;

