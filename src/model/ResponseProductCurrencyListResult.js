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
import Currency from './Currency';

/**
 * The ResponseProductCurrencyListResult model module.
 * @module model/ResponseProductCurrencyListResult
 * @version 1.1
 */
class ResponseProductCurrencyListResult {
    /**
     * Constructs a new <code>ResponseProductCurrencyListResult</code>.
     * @alias module:model/ResponseProductCurrencyListResult
     */
    constructor() { 
        
        ResponseProductCurrencyListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseProductCurrencyListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseProductCurrencyListResult} obj Optional instance to populate.
     * @return {module:model/ResponseProductCurrencyListResult} The populated <code>ResponseProductCurrencyListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseProductCurrencyListResult();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], [Currency]);
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
     * Validates the JSON data with respect to <code>ResponseProductCurrencyListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseProductCurrencyListResult</code>.
     */
    static validateJSON(data) {
        if (data['currency']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['currency'])) {
                throw new Error("Expected the field `currency` to be an array in the JSON data but got " + data['currency']);
            }
            // validate the optional field `currency` (array)
            for (const item of data['currency']) {
                Currency.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} total_count
 */
ResponseProductCurrencyListResult.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Currency>} currency
 */
ResponseProductCurrencyListResult.prototype['currency'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseProductCurrencyListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseProductCurrencyListResult.prototype['custom_fields'] = undefined;






export default ResponseProductCurrencyListResult;

