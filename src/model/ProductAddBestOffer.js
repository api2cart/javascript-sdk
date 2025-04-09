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
 * The ProductAddBestOffer model module.
 * @module model/ProductAddBestOffer
 * @version 1.1
 */
class ProductAddBestOffer {
    /**
     * Constructs a new <code>ProductAddBestOffer</code>.
     * The price at which Best Offers are automatically accepted.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;best_offer[&lt;b&gt;minimum_offer_price&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;best_offer[&lt;b&gt;auto_accept_price&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt;
     * @alias module:model/ProductAddBestOffer
     */
    constructor() { 
        
        ProductAddBestOffer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAddBestOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAddBestOffer} obj Optional instance to populate.
     * @return {module:model/ProductAddBestOffer} The populated <code>ProductAddBestOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAddBestOffer();

            if (data.hasOwnProperty('minimum_offer_price')) {
                obj['minimum_offer_price'] = ApiClient.convertToType(data['minimum_offer_price'], 'Number');
            }
            if (data.hasOwnProperty('auto_accept_price')) {
                obj['auto_accept_price'] = ApiClient.convertToType(data['auto_accept_price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAddBestOffer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAddBestOffer</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} minimum_offer_price
 */
ProductAddBestOffer.prototype['minimum_offer_price'] = undefined;

/**
 * @member {Number} auto_accept_price
 */
ProductAddBestOffer.prototype['auto_accept_price'] = undefined;






export default ProductAddBestOffer;

