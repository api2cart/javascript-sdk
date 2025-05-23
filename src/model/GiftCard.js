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
import CouponHistory from './CouponHistory';

/**
 * The GiftCard model module.
 * @module model/GiftCard
 * @version 1.1
 */
class GiftCard {
    /**
     * Constructs a new <code>GiftCard</code>.
     * @alias module:model/GiftCard
     */
    constructor() { 
        
        GiftCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GiftCard} obj Optional instance to populate.
     * @return {module:model/GiftCard} The populated <code>GiftCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('initial_amount')) {
                obj['initial_amount'] = ApiClient.convertToType(data['initial_amount'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('avail_to')) {
                obj['avail_to'] = ApiClient.convertToType(data['avail_to'], 'String');
            }
            if (data.hasOwnProperty('free_product_ids')) {
                obj['free_product_ids'] = ApiClient.convertToType(data['free_product_ids'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('issuer_email')) {
                obj['issuer_email'] = ApiClient.convertToType(data['issuer_email'], 'String');
            }
            if (data.hasOwnProperty('recipient_email')) {
                obj['recipient_email'] = ApiClient.convertToType(data['recipient_email'], 'String');
            }
            if (data.hasOwnProperty('issuer_name')) {
                obj['issuer_name'] = ApiClient.convertToType(data['issuer_name'], 'String');
            }
            if (data.hasOwnProperty('recipient_name')) {
                obj['recipient_name'] = ApiClient.convertToType(data['recipient_name'], 'String');
            }
            if (data.hasOwnProperty('usage_history')) {
                obj['usage_history'] = ApiClient.convertToType(data['usage_history'], [CouponHistory]);
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
     * Validates the JSON data with respect to <code>GiftCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GiftCard</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['avail_to'] && !(typeof data['avail_to'] === 'string' || data['avail_to'] instanceof String)) {
            throw new Error("Expected the field `avail_to` to be a primitive type in the JSON string but got " + data['avail_to']);
        }
        // ensure the json data is a string
        if (data['free_product_ids'] && !(typeof data['free_product_ids'] === 'string' || data['free_product_ids'] instanceof String)) {
            throw new Error("Expected the field `free_product_ids` to be a primitive type in the JSON string but got " + data['free_product_ids']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['issuer_email'] && !(typeof data['issuer_email'] === 'string' || data['issuer_email'] instanceof String)) {
            throw new Error("Expected the field `issuer_email` to be a primitive type in the JSON string but got " + data['issuer_email']);
        }
        // ensure the json data is a string
        if (data['recipient_email'] && !(typeof data['recipient_email'] === 'string' || data['recipient_email'] instanceof String)) {
            throw new Error("Expected the field `recipient_email` to be a primitive type in the JSON string but got " + data['recipient_email']);
        }
        // ensure the json data is a string
        if (data['issuer_name'] && !(typeof data['issuer_name'] === 'string' || data['issuer_name'] instanceof String)) {
            throw new Error("Expected the field `issuer_name` to be a primitive type in the JSON string but got " + data['issuer_name']);
        }
        // ensure the json data is a string
        if (data['recipient_name'] && !(typeof data['recipient_name'] === 'string' || data['recipient_name'] instanceof String)) {
            throw new Error("Expected the field `recipient_name` to be a primitive type in the JSON string but got " + data['recipient_name']);
        }
        if (data['usage_history']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['usage_history'])) {
                throw new Error("Expected the field `usage_history` to be an array in the JSON data but got " + data['usage_history']);
            }
            // validate the optional field `usage_history` (array)
            for (const item of data['usage_history']) {
                CouponHistory.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
GiftCard.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GiftCard.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GiftCard.prototype['name'] = undefined;

/**
 * @member {String} type
 */
GiftCard.prototype['type'] = undefined;

/**
 * @member {String} currency_code
 */
GiftCard.prototype['currency_code'] = undefined;

/**
 * @member {Number} amount
 */
GiftCard.prototype['amount'] = undefined;

/**
 * @member {Number} initial_amount
 */
GiftCard.prototype['initial_amount'] = undefined;

/**
 * @member {String} status
 */
GiftCard.prototype['status'] = undefined;

/**
 * @member {String} created_at
 */
GiftCard.prototype['created_at'] = undefined;

/**
 * @member {String} avail_to
 */
GiftCard.prototype['avail_to'] = undefined;

/**
 * @member {String} free_product_ids
 */
GiftCard.prototype['free_product_ids'] = undefined;

/**
 * @member {String} message
 */
GiftCard.prototype['message'] = undefined;

/**
 * @member {String} issuer_email
 */
GiftCard.prototype['issuer_email'] = undefined;

/**
 * @member {String} recipient_email
 */
GiftCard.prototype['recipient_email'] = undefined;

/**
 * @member {String} issuer_name
 */
GiftCard.prototype['issuer_name'] = undefined;

/**
 * @member {String} recipient_name
 */
GiftCard.prototype['recipient_name'] = undefined;

/**
 * @member {Array.<module:model/CouponHistory>} usage_history
 */
GiftCard.prototype['usage_history'] = undefined;

/**
 * @member {Object} additional_fields
 */
GiftCard.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
GiftCard.prototype['custom_fields'] = undefined;






export default GiftCard;

