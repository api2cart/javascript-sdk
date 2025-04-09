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
import OrderShippingMethod from './OrderShippingMethod';

/**
 * The Carrier model module.
 * @module model/Carrier
 * @version 1.1
 */
class Carrier {
    /**
     * Constructs a new <code>Carrier</code>.
     * @alias module:model/Carrier
     */
    constructor() { 
        
        Carrier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Carrier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Carrier} obj Optional instance to populate.
     * @return {module:model/Carrier} The populated <code>Carrier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Carrier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], [OrderShippingMethod]);
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
     * Validates the JSON data with respect to <code>Carrier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Carrier</code>.
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
        if (data['shipping_methods']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipping_methods'])) {
                throw new Error("Expected the field `shipping_methods` to be an array in the JSON data but got " + data['shipping_methods']);
            }
            // validate the optional field `shipping_methods` (array)
            for (const item of data['shipping_methods']) {
                OrderShippingMethod.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Carrier.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Carrier.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
Carrier.prototype['active'] = undefined;

/**
 * @member {Array.<module:model/OrderShippingMethod>} shipping_methods
 */
Carrier.prototype['shipping_methods'] = undefined;

/**
 * @member {Object} additional_fields
 */
Carrier.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
Carrier.prototype['custom_fields'] = undefined;






export default Carrier;

