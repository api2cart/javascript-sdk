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
import ProductOption from './ProductOption';

/**
 * The ResponseProductOptionListResult model module.
 * @module model/ResponseProductOptionListResult
 * @version 1.1
 */
class ResponseProductOptionListResult {
    /**
     * Constructs a new <code>ResponseProductOptionListResult</code>.
     * @alias module:model/ResponseProductOptionListResult
     */
    constructor() { 
        
        ResponseProductOptionListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseProductOptionListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseProductOptionListResult} obj Optional instance to populate.
     * @return {module:model/ResponseProductOptionListResult} The populated <code>ResponseProductOptionListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseProductOptionListResult();

            if (data.hasOwnProperty('option')) {
                obj['option'] = ApiClient.convertToType(data['option'], [ProductOption]);
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
     * Validates the JSON data with respect to <code>ResponseProductOptionListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseProductOptionListResult</code>.
     */
    static validateJSON(data) {
        if (data['option']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['option'])) {
                throw new Error("Expected the field `option` to be an array in the JSON data but got " + data['option']);
            }
            // validate the optional field `option` (array)
            for (const item of data['option']) {
                ProductOption.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ProductOption>} option
 */
ResponseProductOptionListResult.prototype['option'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseProductOptionListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseProductOptionListResult.prototype['custom_fields'] = undefined;






export default ResponseProductOptionListResult;

