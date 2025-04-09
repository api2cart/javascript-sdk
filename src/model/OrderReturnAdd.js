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
import OrderReturnAddOrderProductsInner from './OrderReturnAddOrderProductsInner';

/**
 * The OrderReturnAdd model module.
 * @module model/OrderReturnAdd
 * @version 1.1
 */
class OrderReturnAdd {
    /**
     * Constructs a new <code>OrderReturnAdd</code>.
     * @alias module:model/OrderReturnAdd
     * @param returnStatusId {String} Defines return request status
     * @param returnActionId {String} Defines return request action
     * @param returnReasonId {String} Defines return request reason
     * @param orderProducts {Array.<module:model/OrderReturnAddOrderProductsInner>} 
     */
    constructor(returnStatusId, returnActionId, returnReasonId, orderProducts) { 
        
        OrderReturnAdd.initialize(this, returnStatusId, returnActionId, returnReasonId, orderProducts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, returnStatusId, returnActionId, returnReasonId, orderProducts) { 
        obj['return_status_id'] = returnStatusId;
        obj['return_action_id'] = returnActionId;
        obj['return_reason_id'] = returnReasonId;
        obj['item_restock'] = false;
        obj['send_notifications'] = false;
        obj['order_products'] = orderProducts;
    }

    /**
     * Constructs a <code>OrderReturnAdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderReturnAdd} obj Optional instance to populate.
     * @return {module:model/OrderReturnAdd} The populated <code>OrderReturnAdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReturnAdd();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('return_status_id')) {
                obj['return_status_id'] = ApiClient.convertToType(data['return_status_id'], 'String');
            }
            if (data.hasOwnProperty('return_action_id')) {
                obj['return_action_id'] = ApiClient.convertToType(data['return_action_id'], 'String');
            }
            if (data.hasOwnProperty('return_reason_id')) {
                obj['return_reason_id'] = ApiClient.convertToType(data['return_reason_id'], 'String');
            }
            if (data.hasOwnProperty('return_reason')) {
                obj['return_reason'] = ApiClient.convertToType(data['return_reason'], 'String');
            }
            if (data.hasOwnProperty('item_restock')) {
                obj['item_restock'] = ApiClient.convertToType(data['item_restock'], 'Boolean');
            }
            if (data.hasOwnProperty('staff_note')) {
                obj['staff_note'] = ApiClient.convertToType(data['staff_note'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('send_notifications')) {
                obj['send_notifications'] = ApiClient.convertToType(data['send_notifications'], 'Boolean');
            }
            if (data.hasOwnProperty('reject_reason')) {
                obj['reject_reason'] = ApiClient.convertToType(data['reject_reason'], 'String');
            }
            if (data.hasOwnProperty('order_products')) {
                obj['order_products'] = ApiClient.convertToType(data['order_products'], [OrderReturnAddOrderProductsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderReturnAdd</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderReturnAdd</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderReturnAdd.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['return_status_id'] && !(typeof data['return_status_id'] === 'string' || data['return_status_id'] instanceof String)) {
            throw new Error("Expected the field `return_status_id` to be a primitive type in the JSON string but got " + data['return_status_id']);
        }
        // ensure the json data is a string
        if (data['return_action_id'] && !(typeof data['return_action_id'] === 'string' || data['return_action_id'] instanceof String)) {
            throw new Error("Expected the field `return_action_id` to be a primitive type in the JSON string but got " + data['return_action_id']);
        }
        // ensure the json data is a string
        if (data['return_reason_id'] && !(typeof data['return_reason_id'] === 'string' || data['return_reason_id'] instanceof String)) {
            throw new Error("Expected the field `return_reason_id` to be a primitive type in the JSON string but got " + data['return_reason_id']);
        }
        // ensure the json data is a string
        if (data['return_reason'] && !(typeof data['return_reason'] === 'string' || data['return_reason'] instanceof String)) {
            throw new Error("Expected the field `return_reason` to be a primitive type in the JSON string but got " + data['return_reason']);
        }
        // ensure the json data is a string
        if (data['staff_note'] && !(typeof data['staff_note'] === 'string' || data['staff_note'] instanceof String)) {
            throw new Error("Expected the field `staff_note` to be a primitive type in the JSON string but got " + data['staff_note']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['reject_reason'] && !(typeof data['reject_reason'] === 'string' || data['reject_reason'] instanceof String)) {
            throw new Error("Expected the field `reject_reason` to be a primitive type in the JSON string but got " + data['reject_reason']);
        }
        if (data['order_products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['order_products'])) {
                throw new Error("Expected the field `order_products` to be an array in the JSON data but got " + data['order_products']);
            }
            // validate the optional field `order_products` (array)
            for (const item of data['order_products']) {
                OrderReturnAddOrderProductsInner.validateJSON(item);
            };
        }

        return true;
    }


}

OrderReturnAdd.RequiredProperties = ["return_status_id", "return_action_id", "return_reason_id", "order_products"];

/**
 * Defines the order id
 * @member {String} order_id
 */
OrderReturnAdd.prototype['order_id'] = undefined;

/**
 * Store Id
 * @member {String} store_id
 */
OrderReturnAdd.prototype['store_id'] = undefined;

/**
 * Defines return request status
 * @member {String} return_status_id
 */
OrderReturnAdd.prototype['return_status_id'] = undefined;

/**
 * Defines return request action
 * @member {String} return_action_id
 */
OrderReturnAdd.prototype['return_action_id'] = undefined;

/**
 * Defines return request reason
 * @member {String} return_reason_id
 */
OrderReturnAdd.prototype['return_reason_id'] = undefined;

/**
 * Defines return request reason
 * @member {String} return_reason
 */
OrderReturnAdd.prototype['return_reason'] = undefined;

/**
 * Boolean, whether or not to add the line items back to the store inventory.
 * @member {Boolean} item_restock
 * @default false
 */
OrderReturnAdd.prototype['item_restock'] = false;

/**
 * Specifies staff note
 * @member {String} staff_note
 */
OrderReturnAdd.prototype['staff_note'] = undefined;

/**
 * Specifies return comment
 * @member {String} comment
 */
OrderReturnAdd.prototype['comment'] = undefined;

/**
 * Send notifications to customer after order was created
 * @member {Boolean} send_notifications
 * @default false
 */
OrderReturnAdd.prototype['send_notifications'] = false;

/**
 * Defines return reject reason
 * @member {String} reject_reason
 */
OrderReturnAdd.prototype['reject_reason'] = undefined;

/**
 * @member {Array.<module:model/OrderReturnAddOrderProductsInner>} order_products
 */
OrderReturnAdd.prototype['order_products'] = undefined;






export default OrderReturnAdd;

