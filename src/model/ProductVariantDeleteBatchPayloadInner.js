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
 * The ProductVariantDeleteBatchPayloadInner model module.
 * @module model/ProductVariantDeleteBatchPayloadInner
 * @version 1.1
 */
class ProductVariantDeleteBatchPayloadInner {
    /**
     * Constructs a new <code>ProductVariantDeleteBatchPayloadInner</code>.
     * @alias module:model/ProductVariantDeleteBatchPayloadInner
     * @param productId {String} 
     * @param id {String} 
     */
    constructor(productId, id) { 
        
        ProductVariantDeleteBatchPayloadInner.initialize(this, productId, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId, id) { 
        obj['product_id'] = productId;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ProductVariantDeleteBatchPayloadInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariantDeleteBatchPayloadInner} obj Optional instance to populate.
     * @return {module:model/ProductVariantDeleteBatchPayloadInner} The populated <code>ProductVariantDeleteBatchPayloadInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantDeleteBatchPayloadInner();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariantDeleteBatchPayloadInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariantDeleteBatchPayloadInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductVariantDeleteBatchPayloadInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }

        return true;
    }


}

ProductVariantDeleteBatchPayloadInner.RequiredProperties = ["product_id", "id"];

/**
 * @member {String} product_id
 */
ProductVariantDeleteBatchPayloadInner.prototype['product_id'] = undefined;

/**
 * @member {String} id
 */
ProductVariantDeleteBatchPayloadInner.prototype['id'] = undefined;

/**
 * @member {String} store_id
 */
ProductVariantDeleteBatchPayloadInner.prototype['store_id'] = undefined;






export default ProductVariantDeleteBatchPayloadInner;

