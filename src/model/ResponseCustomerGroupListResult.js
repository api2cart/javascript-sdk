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
import CustomerGroup from './CustomerGroup';

/**
 * The ResponseCustomerGroupListResult model module.
 * @module model/ResponseCustomerGroupListResult
 * @version 1.1
 */
class ResponseCustomerGroupListResult {
    /**
     * Constructs a new <code>ResponseCustomerGroupListResult</code>.
     * @alias module:model/ResponseCustomerGroupListResult
     */
    constructor() { 
        
        ResponseCustomerGroupListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseCustomerGroupListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCustomerGroupListResult} obj Optional instance to populate.
     * @return {module:model/ResponseCustomerGroupListResult} The populated <code>ResponseCustomerGroupListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCustomerGroupListResult();

            if (data.hasOwnProperty('group_count')) {
                obj['group_count'] = ApiClient.convertToType(data['group_count'], 'Number');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], [CustomerGroup]);
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
     * Validates the JSON data with respect to <code>ResponseCustomerGroupListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseCustomerGroupListResult</code>.
     */
    static validateJSON(data) {
        if (data['group']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['group'])) {
                throw new Error("Expected the field `group` to be an array in the JSON data but got " + data['group']);
            }
            // validate the optional field `group` (array)
            for (const item of data['group']) {
                CustomerGroup.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} group_count
 */
ResponseCustomerGroupListResult.prototype['group_count'] = undefined;

/**
 * @member {Array.<module:model/CustomerGroup>} group
 */
ResponseCustomerGroupListResult.prototype['group'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseCustomerGroupListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseCustomerGroupListResult.prototype['custom_fields'] = undefined;






export default ResponseCustomerGroupListResult;

