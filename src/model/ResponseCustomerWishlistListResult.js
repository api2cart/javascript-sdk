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
import CustomerWishList from './CustomerWishList';

/**
 * The ResponseCustomerWishlistListResult model module.
 * @module model/ResponseCustomerWishlistListResult
 * @version 1.1
 */
class ResponseCustomerWishlistListResult {
    /**
     * Constructs a new <code>ResponseCustomerWishlistListResult</code>.
     * @alias module:model/ResponseCustomerWishlistListResult
     */
    constructor() { 
        
        ResponseCustomerWishlistListResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseCustomerWishlistListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCustomerWishlistListResult} obj Optional instance to populate.
     * @return {module:model/ResponseCustomerWishlistListResult} The populated <code>ResponseCustomerWishlistListResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCustomerWishlistListResult();

            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('wish_lists')) {
                obj['wish_lists'] = ApiClient.convertToType(data['wish_lists'], [CustomerWishList]);
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
     * Validates the JSON data with respect to <code>ResponseCustomerWishlistListResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseCustomerWishlistListResult</code>.
     */
    static validateJSON(data) {
        if (data['wish_lists']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['wish_lists'])) {
                throw new Error("Expected the field `wish_lists` to be an array in the JSON data but got " + data['wish_lists']);
            }
            // validate the optional field `wish_lists` (array)
            for (const item of data['wish_lists']) {
                CustomerWishList.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} total_count
 */
ResponseCustomerWishlistListResult.prototype['total_count'] = undefined;

/**
 * @member {Array.<module:model/CustomerWishList>} wish_lists
 */
ResponseCustomerWishlistListResult.prototype['wish_lists'] = undefined;

/**
 * @member {Object} additional_fields
 */
ResponseCustomerWishlistListResult.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ResponseCustomerWishlistListResult.prototype['custom_fields'] = undefined;






export default ResponseCustomerWishlistListResult;

