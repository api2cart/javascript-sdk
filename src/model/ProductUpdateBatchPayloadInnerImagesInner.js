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
 * The ProductUpdateBatchPayloadInnerImagesInner model module.
 * @module model/ProductUpdateBatchPayloadInnerImagesInner
 * @version 1.1
 */
class ProductUpdateBatchPayloadInnerImagesInner {
    /**
     * Constructs a new <code>ProductUpdateBatchPayloadInnerImagesInner</code>.
     * @alias module:model/ProductUpdateBatchPayloadInnerImagesInner
     * @param url {String} 
     */
    constructor(url) { 
        
        ProductUpdateBatchPayloadInnerImagesInner.initialize(this, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url) { 
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ProductUpdateBatchPayloadInnerImagesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductUpdateBatchPayloadInnerImagesInner} obj Optional instance to populate.
     * @return {module:model/ProductUpdateBatchPayloadInnerImagesInner} The populated <code>ProductUpdateBatchPayloadInnerImagesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductUpdateBatchPayloadInnerImagesInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductUpdateBatchPayloadInnerImagesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductUpdateBatchPayloadInnerImagesInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductUpdateBatchPayloadInnerImagesInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

ProductUpdateBatchPayloadInnerImagesInner.RequiredProperties = ["url"];

/**
 * @member {String} id
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['name'] = undefined;

/**
 * @member {String} url
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['url'] = undefined;

/**
 * @member {String} label
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['label'] = undefined;

/**
 * @member {Number} position
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['position'] = undefined;

/**
 * @member {String} type
 */
ProductUpdateBatchPayloadInnerImagesInner.prototype['type'] = undefined;






export default ProductUpdateBatchPayloadInnerImagesInner;

