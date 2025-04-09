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
import CategoryAddBatchPayloadInner from './CategoryAddBatchPayloadInner';

/**
 * The CategoryAddBatch model module.
 * @module model/CategoryAddBatch
 * @version 1.1
 */
class CategoryAddBatch {
    /**
     * Constructs a new <code>CategoryAddBatch</code>.
     * @alias module:model/CategoryAddBatch
     * @param payload {Array.<module:model/CategoryAddBatchPayloadInner>} Contains an array of categories objects. The list of properties may vary depending on the specific platform.
     */
    constructor(payload) { 
        
        CategoryAddBatch.initialize(this, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payload) { 
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>CategoryAddBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryAddBatch} obj Optional instance to populate.
     * @return {module:model/CategoryAddBatch} The populated <code>CategoryAddBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryAddBatch();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [CategoryAddBatchPayloadInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CategoryAddBatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CategoryAddBatch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CategoryAddBatch.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['payload']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payload'])) {
                throw new Error("Expected the field `payload` to be an array in the JSON data but got " + data['payload']);
            }
            // validate the optional field `payload` (array)
            for (const item of data['payload']) {
                CategoryAddBatchPayloadInner.validateJSON(item);
            };
        }

        return true;
    }


}

CategoryAddBatch.RequiredProperties = ["payload"];

/**
 * Contains an array of categories objects. The list of properties may vary depending on the specific platform.
 * @member {Array.<module:model/CategoryAddBatchPayloadInner>} payload
 */
CategoryAddBatch.prototype['payload'] = undefined;






export default CategoryAddBatch;

