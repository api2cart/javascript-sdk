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
import Pagination from './Pagination';
import ResponseProductBrandListResult from './ResponseProductBrandListResult';

/**
 * The ModelResponseProductBrandList model module.
 * @module model/ModelResponseProductBrandList
 * @version 1.1
 */
class ModelResponseProductBrandList {
    /**
     * Constructs a new <code>ModelResponseProductBrandList</code>.
     * @alias module:model/ModelResponseProductBrandList
     */
    constructor() { 
        
        ModelResponseProductBrandList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelResponseProductBrandList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelResponseProductBrandList} obj Optional instance to populate.
     * @return {module:model/ModelResponseProductBrandList} The populated <code>ModelResponseProductBrandList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelResponseProductBrandList();

            if (data.hasOwnProperty('return_code')) {
                obj['return_code'] = ApiClient.convertToType(data['return_code'], 'Number');
            }
            if (data.hasOwnProperty('return_message')) {
                obj['return_message'] = ApiClient.convertToType(data['return_message'], 'String');
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ResponseProductBrandListResult.constructFromObject(data['result']);
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
     * Validates the JSON data with respect to <code>ModelResponseProductBrandList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelResponseProductBrandList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['return_message'] && !(typeof data['return_message'] === 'string' || data['return_message'] instanceof String)) {
            throw new Error("Expected the field `return_message` to be a primitive type in the JSON string but got " + data['return_message']);
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          Pagination.validateJSON(data['pagination']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          ResponseProductBrandListResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {Number} return_code
 */
ModelResponseProductBrandList.prototype['return_code'] = undefined;

/**
 * @member {String} return_message
 */
ModelResponseProductBrandList.prototype['return_message'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ModelResponseProductBrandList.prototype['pagination'] = undefined;

/**
 * @member {module:model/ResponseProductBrandListResult} result
 */
ModelResponseProductBrandList.prototype['result'] = undefined;

/**
 * @member {Object} additional_fields
 */
ModelResponseProductBrandList.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
ModelResponseProductBrandList.prototype['custom_fields'] = undefined;






export default ModelResponseProductBrandList;

