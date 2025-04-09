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
 * The ProductAddTierPricesInner model module.
 * @module model/ProductAddTierPricesInner
 * @version 1.1
 */
class ProductAddTierPricesInner {
    /**
     * Constructs a new <code>ProductAddTierPricesInner</code>.
     * @alias module:model/ProductAddTierPricesInner
     */
    constructor() { 
        
        ProductAddTierPricesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAddTierPricesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAddTierPricesInner} obj Optional instance to populate.
     * @return {module:model/ProductAddTierPricesInner} The populated <code>ProductAddTierPricesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAddTierPricesInner();

            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAddTierPricesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAddTierPricesInner</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} quantity
 */
ProductAddTierPricesInner.prototype['quantity'] = undefined;

/**
 * @member {Number} price
 */
ProductAddTierPricesInner.prototype['price'] = undefined;






export default ProductAddTierPricesInner;

