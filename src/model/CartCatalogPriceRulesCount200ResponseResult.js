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
 * The CartCatalogPriceRulesCount200ResponseResult model module.
 * @module model/CartCatalogPriceRulesCount200ResponseResult
 * @version 1.1
 */
class CartCatalogPriceRulesCount200ResponseResult {
    /**
     * Constructs a new <code>CartCatalogPriceRulesCount200ResponseResult</code>.
     * @alias module:model/CartCatalogPriceRulesCount200ResponseResult
     */
    constructor() { 
        
        CartCatalogPriceRulesCount200ResponseResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartCatalogPriceRulesCount200ResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartCatalogPriceRulesCount200ResponseResult} obj Optional instance to populate.
     * @return {module:model/CartCatalogPriceRulesCount200ResponseResult} The populated <code>CartCatalogPriceRulesCount200ResponseResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartCatalogPriceRulesCount200ResponseResult();

            if (data.hasOwnProperty('catalog_price_rules_count')) {
                obj['catalog_price_rules_count'] = ApiClient.convertToType(data['catalog_price_rules_count'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CartCatalogPriceRulesCount200ResponseResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CartCatalogPriceRulesCount200ResponseResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['catalog_price_rules_count'] && !(typeof data['catalog_price_rules_count'] === 'string' || data['catalog_price_rules_count'] instanceof String)) {
            throw new Error("Expected the field `catalog_price_rules_count` to be a primitive type in the JSON string but got " + data['catalog_price_rules_count']);
        }

        return true;
    }


}



/**
 * @member {String} catalog_price_rules_count
 */
CartCatalogPriceRulesCount200ResponseResult.prototype['catalog_price_rules_count'] = undefined;






export default CartCatalogPriceRulesCount200ResponseResult;

