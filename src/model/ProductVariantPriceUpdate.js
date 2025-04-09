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
import ProductPriceUpdateGroupPricesInner from './ProductPriceUpdateGroupPricesInner';

/**
 * The ProductVariantPriceUpdate model module.
 * @module model/ProductVariantPriceUpdate
 * @version 1.1
 */
class ProductVariantPriceUpdate {
    /**
     * Constructs a new <code>ProductVariantPriceUpdate</code>.
     * @alias module:model/ProductVariantPriceUpdate
     * @param groupPrices {Array.<module:model/ProductPriceUpdateGroupPricesInner>} Defines variants's group prices
     */
    constructor(groupPrices) { 
        
        ProductVariantPriceUpdate.initialize(this, groupPrices);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupPrices) { 
        obj['group_prices'] = groupPrices;
    }

    /**
     * Constructs a <code>ProductVariantPriceUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariantPriceUpdate} obj Optional instance to populate.
     * @return {module:model/ProductVariantPriceUpdate} The populated <code>ProductVariantPriceUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantPriceUpdate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('group_prices')) {
                obj['group_prices'] = ApiClient.convertToType(data['group_prices'], [ProductPriceUpdateGroupPricesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariantPriceUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariantPriceUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductVariantPriceUpdate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        if (data['group_prices']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['group_prices'])) {
                throw new Error("Expected the field `group_prices` to be an array in the JSON data but got " + data['group_prices']);
            }
            // validate the optional field `group_prices` (array)
            for (const item of data['group_prices']) {
                ProductPriceUpdateGroupPricesInner.validateJSON(item);
            };
        }

        return true;
    }


}

ProductVariantPriceUpdate.RequiredProperties = ["group_prices"];

/**
 * Defines the variant where the price has to be updated
 * @member {String} id
 */
ProductVariantPriceUpdate.prototype['id'] = undefined;

/**
 * Product id
 * @member {String} product_id
 */
ProductVariantPriceUpdate.prototype['product_id'] = undefined;

/**
 * Defines variants's group prices
 * @member {Array.<module:model/ProductPriceUpdateGroupPricesInner>} group_prices
 */
ProductVariantPriceUpdate.prototype['group_prices'] = undefined;






export default ProductVariantPriceUpdate;

