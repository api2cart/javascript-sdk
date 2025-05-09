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
 * The ProductAddSellerProfiles model module.
 * @module model/ProductAddSellerProfiles
 * @version 1.1
 */
class ProductAddSellerProfiles {
    /**
     * Constructs a new <code>ProductAddSellerProfiles</code>.
     * If the seller is subscribed to \&quot;Business Policies\&quot;, use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;seller_profiles[&lt;b&gt;shipping_profile_id&lt;/b&gt;] &#x3D; string&lt;/br&gt;seller_profiles[&lt;b&gt;payment_profile_id&lt;/b&gt;] &#x3D; string&lt;/br&gt;seller_profiles[&lt;b&gt;return_profile_id&lt;/b&gt;] &#x3D; string&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt;
     * @alias module:model/ProductAddSellerProfiles
     */
    constructor() { 
        
        ProductAddSellerProfiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductAddSellerProfiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAddSellerProfiles} obj Optional instance to populate.
     * @return {module:model/ProductAddSellerProfiles} The populated <code>ProductAddSellerProfiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAddSellerProfiles();

            if (data.hasOwnProperty('shipping_profile_id')) {
                obj['shipping_profile_id'] = ApiClient.convertToType(data['shipping_profile_id'], 'String');
            }
            if (data.hasOwnProperty('payment_profile_id')) {
                obj['payment_profile_id'] = ApiClient.convertToType(data['payment_profile_id'], 'String');
            }
            if (data.hasOwnProperty('return_profile_id')) {
                obj['return_profile_id'] = ApiClient.convertToType(data['return_profile_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAddSellerProfiles</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAddSellerProfiles</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shipping_profile_id'] && !(typeof data['shipping_profile_id'] === 'string' || data['shipping_profile_id'] instanceof String)) {
            throw new Error("Expected the field `shipping_profile_id` to be a primitive type in the JSON string but got " + data['shipping_profile_id']);
        }
        // ensure the json data is a string
        if (data['payment_profile_id'] && !(typeof data['payment_profile_id'] === 'string' || data['payment_profile_id'] instanceof String)) {
            throw new Error("Expected the field `payment_profile_id` to be a primitive type in the JSON string but got " + data['payment_profile_id']);
        }
        // ensure the json data is a string
        if (data['return_profile_id'] && !(typeof data['return_profile_id'] === 'string' || data['return_profile_id'] instanceof String)) {
            throw new Error("Expected the field `return_profile_id` to be a primitive type in the JSON string but got " + data['return_profile_id']);
        }

        return true;
    }


}



/**
 * @member {String} shipping_profile_id
 */
ProductAddSellerProfiles.prototype['shipping_profile_id'] = undefined;

/**
 * @member {String} payment_profile_id
 */
ProductAddSellerProfiles.prototype['payment_profile_id'] = undefined;

/**
 * @member {String} return_profile_id
 */
ProductAddSellerProfiles.prototype['return_profile_id'] = undefined;






export default ProductAddSellerProfiles;

