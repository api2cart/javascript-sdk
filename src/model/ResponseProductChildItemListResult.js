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
import Child from './Child';

/**
 * The ResponseProductChildItemListResult model module.
 * @module model/ResponseProductChildItemListResult
 * @version 1.1
 */
class ResponseProductChildItemListResult {
    /**
     * Constructs a new <code>ResponseProductChildItemListResult</code>.
     * @alias module:model/ResponseProductChildItemListResult
     */
    constructor() { 
        
        ResponseProductChildItemListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseProductChildItemListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseProductChildItemListResult} obj Optional instance to populate.
     * @return {module:model/ResponseProductChildItemListResult} The populated <code>ResponseProductChildItemListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseProductChildItemListResult();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [Child]);
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
     * Validates the JSON data with respect to <code>ResponseProductChildItemListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseProductChildItemListResult</code>.
     */
    static validateJSON(data) {
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                Child.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} total_count
 */
ResponseProductChildItemListResult.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/Child>} children
 */
ResponseProductChildItemListResult.prototype['children'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseProductChildItemListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseProductChildItemListResult.prototype['custom_fields'] = undefined;






export default ResponseProductChildItemListResult;

