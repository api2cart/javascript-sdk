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

/**
 * The TaxClass model module.
 * @module model/TaxClass
 * @version 1.1
 */
class TaxClass {
    /**
     * Constructs a new <code>TaxClass</code>.
     * @alias module:model/TaxClass
     */
    constructor() { 
        
        TaxClass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxClass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxClass} obj Optional instance to populate.
     * @return {module:model/TaxClass} The populated <code>TaxClass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxClass();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('avail')) {
                obj['avail'] = ApiClient.convertToType(data['avail'], 'Boolean');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('tax_type')) {
                obj['tax_type'] = ApiClient.convertToType(data['tax_type'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = A2CDateTime.constructFromObject(data['created_at']);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = A2CDateTime.constructFromObject(data['modified_at']);
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
     * Validates the JSON data with respect to <code>TaxClass</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaxClass</code>.
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
        // validate the optional field `created_at`
        if (data['created_at']) { // data not null
          A2CDateTime.validateJSON(data['created_at']);
        }
        // validate the optional field `modified_at`
        if (data['modified_at']) { // data not null
          A2CDateTime.validateJSON(data['modified_at']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
TaxClass.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TaxClass.prototype['name'] = undefined;

/**
 * @member {Boolean} avail
 */
TaxClass.prototype['avail'] = undefined;

/**
 * @member {Number} tax
 */
TaxClass.prototype['tax'] = undefined;

/**
 * @member {Number} tax_type
 */
TaxClass.prototype['tax_type'] = undefined;

/**
 * @member {module:model/A2CDateTime} created_at
 */
TaxClass.prototype['created_at'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_at
 */
TaxClass.prototype['modified_at'] = undefined;

/**
 * @member {Object} additional_fields
 */
TaxClass.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
TaxClass.prototype['custom_fields'] = undefined;






export default TaxClass;

