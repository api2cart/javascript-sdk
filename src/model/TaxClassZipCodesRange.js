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
 * The TaxClassZipCodesRange model module.
 * @module model/TaxClassZipCodesRange
 * @version 1.1
 */
class TaxClassZipCodesRange {
    /**
     * Constructs a new <code>TaxClassZipCodesRange</code>.
     * @alias module:model/TaxClassZipCodesRange
     */
    constructor() { 
        
        TaxClassZipCodesRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxClassZipCodesRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxClassZipCodesRange} obj Optional instance to populate.
     * @return {module:model/TaxClassZipCodesRange} The populated <code>TaxClassZipCodesRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxClassZipCodesRange();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
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
     * Validates the JSON data with respect to <code>TaxClassZipCodesRange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaxClassZipCodesRange</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}



/**
 * @member {String} from
 */
TaxClassZipCodesRange.prototype['from'] = undefined;

/**
 * @member {String} to
 */
TaxClassZipCodesRange.prototype['to'] = undefined;

/**
 * @member {Object} additional_fields
 */
TaxClassZipCodesRange.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
TaxClassZipCodesRange.prototype['custom_fields'] = undefined;






export default TaxClassZipCodesRange;

