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
import TaxClass from './TaxClass';

/**
 * The ResponseTaxClassListResult model module.
 * @module model/ResponseTaxClassListResult
 * @version 1.1
 */
class ResponseTaxClassListResult {
    /**
     * Constructs a new <code>ResponseTaxClassListResult</code>.
     * @alias module:model/ResponseTaxClassListResult
     */
    constructor() { 
        
        ResponseTaxClassListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseTaxClassListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseTaxClassListResult} obj Optional instance to populate.
     * @return {module:model/ResponseTaxClassListResult} The populated <code>ResponseTaxClassListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseTaxClassListResult();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('tax_classes')) {
                obj['tax_classes'] = ApiClient.convertToType(data['tax_classes'], [TaxClass]);
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
     * Validates the JSON data with respect to <code>ResponseTaxClassListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseTaxClassListResult</code>.
     */
    static validateJSON(data) {
        if (data['tax_classes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tax_classes'])) {
                throw new Error("Expected the field `tax_classes` to be an array in the JSON data but got " + data['tax_classes']);
            }
            // validate the optional field `tax_classes` (array)
            for (const item of data['tax_classes']) {
                TaxClass.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} total_count
 */
ResponseTaxClassListResult.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/TaxClass>} tax_classes
 */
ResponseTaxClassListResult.prototype['tax_classes'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseTaxClassListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseTaxClassListResult.prototype['custom_fields'] = undefined;






export default ResponseTaxClassListResult;

