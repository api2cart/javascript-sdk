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
import OrderAddOrderItemInnerOrderItemOptionInner from './OrderAddOrderItemInnerOrderItemOptionInner';
import OrderAddOrderItemInnerOrderItemPropertyInner from './OrderAddOrderItemInnerOrderItemPropertyInner';

/**
 * The OrderAddOrderItemInner model module.
 * @module model/OrderAddOrderItemInner
 * @version 1.1
 */
class OrderAddOrderItemInner {
    /**
     * Constructs a new <code>OrderAddOrderItemInner</code>.
     * @alias module:model/OrderAddOrderItemInner
     * @param orderItemId {String} Defines orders specified by order item id
     * @param orderItemName {String} Defines orders specified by order item name
     * @param orderItemPrice {Number} Defines orders specified by order item price
     * @param orderItemQuantity {Number} Defines orders specified by order item quantity
     */
    constructor(orderItemId, orderItemName, orderItemPrice, orderItemQuantity) { 
        
        OrderAddOrderItemInner.initialize(this, orderItemId, orderItemName, orderItemPrice, orderItemQuantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderItemId, orderItemName, orderItemPrice, orderItemQuantity) { 
        obj['order_item_id'] = orderItemId;
        obj['order_item_name'] = orderItemName;
        obj['order_item_price'] = orderItemPrice;
        obj['order_item_quantity'] = orderItemQuantity;
        obj['order_item_tax'] = 0;
        obj['order_item_price_includes_tax'] = false;
    }

    /**
     * Constructs a <code>OrderAddOrderItemInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderAddOrderItemInner} obj Optional instance to populate.
     * @return {module:model/OrderAddOrderItemInner} The populated <code>OrderAddOrderItemInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAddOrderItemInner();

            if (data.hasOwnProperty('order_item_id')) {
                obj['order_item_id'] = ApiClient.convertToType(data['order_item_id'], 'String');
            }
            if (data.hasOwnProperty('order_item_name')) {
                obj['order_item_name'] = ApiClient.convertToType(data['order_item_name'], 'String');
            }
            if (data.hasOwnProperty('order_item_model')) {
                obj['order_item_model'] = ApiClient.convertToType(data['order_item_model'], 'String');
            }
            if (data.hasOwnProperty('order_item_price')) {
                obj['order_item_price'] = ApiClient.convertToType(data['order_item_price'], 'Number');
            }
            if (data.hasOwnProperty('order_item_quantity')) {
                obj['order_item_quantity'] = ApiClient.convertToType(data['order_item_quantity'], 'Number');
            }
            if (data.hasOwnProperty('order_item_weight')) {
                obj['order_item_weight'] = ApiClient.convertToType(data['order_item_weight'], 'Number');
            }
            if (data.hasOwnProperty('order_item_variant_id')) {
                obj['order_item_variant_id'] = ApiClient.convertToType(data['order_item_variant_id'], 'String');
            }
            if (data.hasOwnProperty('order_item_tax')) {
                obj['order_item_tax'] = ApiClient.convertToType(data['order_item_tax'], 'Number');
            }
            if (data.hasOwnProperty('order_item_tax_class')) {
                obj['order_item_tax_class'] = ApiClient.convertToType(data['order_item_tax_class'], 'String');
            }
            if (data.hasOwnProperty('order_item_price_includes_tax')) {
                obj['order_item_price_includes_tax'] = ApiClient.convertToType(data['order_item_price_includes_tax'], 'Boolean');
            }
            if (data.hasOwnProperty('order_item_parent')) {
                obj['order_item_parent'] = ApiClient.convertToType(data['order_item_parent'], 'Number');
            }
            if (data.hasOwnProperty('order_item_parent_option_name')) {
                obj['order_item_parent_option_name'] = ApiClient.convertToType(data['order_item_parent_option_name'], 'String');
            }
            if (data.hasOwnProperty('order_item_allow_refund_items_separately')) {
                obj['order_item_allow_refund_items_separately'] = ApiClient.convertToType(data['order_item_allow_refund_items_separately'], 'Boolean');
            }
            if (data.hasOwnProperty('order_item_allow_ship_items_separately')) {
                obj['order_item_allow_ship_items_separately'] = ApiClient.convertToType(data['order_item_allow_ship_items_separately'], 'Boolean');
            }
            if (data.hasOwnProperty('order_item_option')) {
                obj['order_item_option'] = ApiClient.convertToType(data['order_item_option'], [OrderAddOrderItemInnerOrderItemOptionInner]);
            }
            if (data.hasOwnProperty('order_item_property')) {
                obj['order_item_property'] = ApiClient.convertToType(data['order_item_property'], [OrderAddOrderItemInnerOrderItemPropertyInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderAddOrderItemInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderAddOrderItemInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderAddOrderItemInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_item_id'] && !(typeof data['order_item_id'] === 'string' || data['order_item_id'] instanceof String)) {
            throw new Error("Expected the field `order_item_id` to be a primitive type in the JSON string but got " + data['order_item_id']);
        }
        // ensure the json data is a string
        if (data['order_item_name'] && !(typeof data['order_item_name'] === 'string' || data['order_item_name'] instanceof String)) {
            throw new Error("Expected the field `order_item_name` to be a primitive type in the JSON string but got " + data['order_item_name']);
        }
        // ensure the json data is a string
        if (data['order_item_model'] && !(typeof data['order_item_model'] === 'string' || data['order_item_model'] instanceof String)) {
            throw new Error("Expected the field `order_item_model` to be a primitive type in the JSON string but got " + data['order_item_model']);
        }
        // ensure the json data is a string
        if (data['order_item_variant_id'] && !(typeof data['order_item_variant_id'] === 'string' || data['order_item_variant_id'] instanceof String)) {
            throw new Error("Expected the field `order_item_variant_id` to be a primitive type in the JSON string but got " + data['order_item_variant_id']);
        }
        // ensure the json data is a string
        if (data['order_item_tax_class'] && !(typeof data['order_item_tax_class'] === 'string' || data['order_item_tax_class'] instanceof String)) {
            throw new Error("Expected the field `order_item_tax_class` to be a primitive type in the JSON string but got " + data['order_item_tax_class']);
        }
        // ensure the json data is a string
        if (data['order_item_parent_option_name'] && !(typeof data['order_item_parent_option_name'] === 'string' || data['order_item_parent_option_name'] instanceof String)) {
            throw new Error("Expected the field `order_item_parent_option_name` to be a primitive type in the JSON string but got " + data['order_item_parent_option_name']);
        }
        if (data['order_item_option']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['order_item_option'])) {
                throw new Error("Expected the field `order_item_option` to be an array in the JSON data but got " + data['order_item_option']);
            }
            // validate the optional field `order_item_option` (array)
            for (const item of data['order_item_option']) {
                OrderAddOrderItemInnerOrderItemOptionInner.validateJSON(item);
            };
        }
        if (data['order_item_property']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['order_item_property'])) {
                throw new Error("Expected the field `order_item_property` to be an array in the JSON data but got " + data['order_item_property']);
            }
            // validate the optional field `order_item_property` (array)
            for (const item of data['order_item_property']) {
                OrderAddOrderItemInnerOrderItemPropertyInner.validateJSON(item);
            };
        }

        return true;
    }


}

OrderAddOrderItemInner.RequiredProperties = ["order_item_id", "order_item_name", "order_item_price", "order_item_quantity"];

/**
 * Defines orders specified by order item id
 * @member {String} order_item_id
 */
OrderAddOrderItemInner.prototype['order_item_id'] = undefined;

/**
 * Defines orders specified by order item name
 * @member {String} order_item_name
 */
OrderAddOrderItemInner.prototype['order_item_name'] = undefined;

/**
 * Defines orders specified by order item model
 * @member {String} order_item_model
 */
OrderAddOrderItemInner.prototype['order_item_model'] = undefined;

/**
 * Defines orders specified by order item price
 * @member {Number} order_item_price
 */
OrderAddOrderItemInner.prototype['order_item_price'] = undefined;

/**
 * Defines orders specified by order item quantity
 * @member {Number} order_item_quantity
 */
OrderAddOrderItemInner.prototype['order_item_quantity'] = undefined;

/**
 * Defines orders specified by order item weight
 * @member {Number} order_item_weight
 */
OrderAddOrderItemInner.prototype['order_item_weight'] = undefined;

/**
 * Ordered product variant. Where x is order item ID
 * @member {String} order_item_variant_id
 */
OrderAddOrderItemInner.prototype['order_item_variant_id'] = undefined;

/**
 * Percentage of tax for product order
 * @member {Number} order_item_tax
 * @default 0
 */
OrderAddOrderItemInner.prototype['order_item_tax'] = 0;

/**
 * Id of the tax class of product.
 * @member {String} order_item_tax_class
 */
OrderAddOrderItemInner.prototype['order_item_tax_class'] = undefined;

/**
 * Defines if item price includes tax
 * @member {Boolean} order_item_price_includes_tax
 * @default false
 */
OrderAddOrderItemInner.prototype['order_item_price_includes_tax'] = false;

/**
 * Index of the parent grouped/bundle product
 * @member {Number} order_item_parent
 */
OrderAddOrderItemInner.prototype['order_item_parent'] = undefined;

/**
 * Option name of the parent grouped/bundle product
 * @member {String} order_item_parent_option_name
 */
OrderAddOrderItemInner.prototype['order_item_parent_option_name'] = undefined;

/**
 * Indicates whether subitems of the grouped/bundle product can be refunded separately
 * @member {Boolean} order_item_allow_refund_items_separately
 */
OrderAddOrderItemInner.prototype['order_item_allow_refund_items_separately'] = undefined;

/**
 * Indicates whether subitems of the grouped/bundle product can be shipped separately
 * @member {Boolean} order_item_allow_ship_items_separately
 */
OrderAddOrderItemInner.prototype['order_item_allow_ship_items_separately'] = undefined;

/**
 * @member {Array.<module:model/OrderAddOrderItemInnerOrderItemOptionInner>} order_item_option
 */
OrderAddOrderItemInner.prototype['order_item_option'] = undefined;

/**
 * @member {Array.<module:model/OrderAddOrderItemInnerOrderItemPropertyInner>} order_item_property
 */
OrderAddOrderItemInner.prototype['order_item_property'] = undefined;






export default OrderAddOrderItemInner;

