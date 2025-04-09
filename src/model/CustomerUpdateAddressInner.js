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
 * The CustomerUpdateAddressInner model module.
 * @module model/CustomerUpdateAddressInner
 * @version 1.1
 */
class CustomerUpdateAddressInner {
    /**
     * Constructs a new <code>CustomerUpdateAddressInner</code>.
     * @alias module:model/CustomerUpdateAddressInner
     */
    constructor() { 
        
        CustomerUpdateAddressInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerUpdateAddressInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerUpdateAddressInner} obj Optional instance to populate.
     * @return {module:model/CustomerUpdateAddressInner} The populated <code>CustomerUpdateAddressInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerUpdateAddressInner();

            if (data.hasOwnProperty('address_book_id')) {
                obj['address_book_id'] = ApiClient.convertToType(data['address_book_id'], 'String');
            }
            if (data.hasOwnProperty('address_book_first_name')) {
                obj['address_book_first_name'] = ApiClient.convertToType(data['address_book_first_name'], 'String');
            }
            if (data.hasOwnProperty('address_book_last_name')) {
                obj['address_book_last_name'] = ApiClient.convertToType(data['address_book_last_name'], 'String');
            }
            if (data.hasOwnProperty('address_book_company')) {
                obj['address_book_company'] = ApiClient.convertToType(data['address_book_company'], 'String');
            }
            if (data.hasOwnProperty('address_book_fax')) {
                obj['address_book_fax'] = ApiClient.convertToType(data['address_book_fax'], 'String');
            }
            if (data.hasOwnProperty('address_book_phone')) {
                obj['address_book_phone'] = ApiClient.convertToType(data['address_book_phone'], 'String');
            }
            if (data.hasOwnProperty('address_book_phone_mobile')) {
                obj['address_book_phone_mobile'] = ApiClient.convertToType(data['address_book_phone_mobile'], 'String');
            }
            if (data.hasOwnProperty('address_book_address1')) {
                obj['address_book_address1'] = ApiClient.convertToType(data['address_book_address1'], 'String');
            }
            if (data.hasOwnProperty('address_book_address2')) {
                obj['address_book_address2'] = ApiClient.convertToType(data['address_book_address2'], 'String');
            }
            if (data.hasOwnProperty('address_book_city')) {
                obj['address_book_city'] = ApiClient.convertToType(data['address_book_city'], 'String');
            }
            if (data.hasOwnProperty('address_book_country')) {
                obj['address_book_country'] = ApiClient.convertToType(data['address_book_country'], 'String');
            }
            if (data.hasOwnProperty('address_book_state')) {
                obj['address_book_state'] = ApiClient.convertToType(data['address_book_state'], 'String');
            }
            if (data.hasOwnProperty('address_book_postcode')) {
                obj['address_book_postcode'] = ApiClient.convertToType(data['address_book_postcode'], 'String');
            }
            if (data.hasOwnProperty('address_book_tax_id')) {
                obj['address_book_tax_id'] = ApiClient.convertToType(data['address_book_tax_id'], 'String');
            }
            if (data.hasOwnProperty('address_book_identification_number')) {
                obj['address_book_identification_number'] = ApiClient.convertToType(data['address_book_identification_number'], 'String');
            }
            if (data.hasOwnProperty('address_book_gender')) {
                obj['address_book_gender'] = ApiClient.convertToType(data['address_book_gender'], 'String');
            }
            if (data.hasOwnProperty('address_book_alias')) {
                obj['address_book_alias'] = ApiClient.convertToType(data['address_book_alias'], 'String');
            }
            if (data.hasOwnProperty('address_book_type')) {
                obj['address_book_type'] = ApiClient.convertToType(data['address_book_type'], 'String');
            }
            if (data.hasOwnProperty('address_book_default')) {
                obj['address_book_default'] = ApiClient.convertToType(data['address_book_default'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerUpdateAddressInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerUpdateAddressInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address_book_id'] && !(typeof data['address_book_id'] === 'string' || data['address_book_id'] instanceof String)) {
            throw new Error("Expected the field `address_book_id` to be a primitive type in the JSON string but got " + data['address_book_id']);
        }
        // ensure the json data is a string
        if (data['address_book_first_name'] && !(typeof data['address_book_first_name'] === 'string' || data['address_book_first_name'] instanceof String)) {
            throw new Error("Expected the field `address_book_first_name` to be a primitive type in the JSON string but got " + data['address_book_first_name']);
        }
        // ensure the json data is a string
        if (data['address_book_last_name'] && !(typeof data['address_book_last_name'] === 'string' || data['address_book_last_name'] instanceof String)) {
            throw new Error("Expected the field `address_book_last_name` to be a primitive type in the JSON string but got " + data['address_book_last_name']);
        }
        // ensure the json data is a string
        if (data['address_book_company'] && !(typeof data['address_book_company'] === 'string' || data['address_book_company'] instanceof String)) {
            throw new Error("Expected the field `address_book_company` to be a primitive type in the JSON string but got " + data['address_book_company']);
        }
        // ensure the json data is a string
        if (data['address_book_fax'] && !(typeof data['address_book_fax'] === 'string' || data['address_book_fax'] instanceof String)) {
            throw new Error("Expected the field `address_book_fax` to be a primitive type in the JSON string but got " + data['address_book_fax']);
        }
        // ensure the json data is a string
        if (data['address_book_phone'] && !(typeof data['address_book_phone'] === 'string' || data['address_book_phone'] instanceof String)) {
            throw new Error("Expected the field `address_book_phone` to be a primitive type in the JSON string but got " + data['address_book_phone']);
        }
        // ensure the json data is a string
        if (data['address_book_phone_mobile'] && !(typeof data['address_book_phone_mobile'] === 'string' || data['address_book_phone_mobile'] instanceof String)) {
            throw new Error("Expected the field `address_book_phone_mobile` to be a primitive type in the JSON string but got " + data['address_book_phone_mobile']);
        }
        // ensure the json data is a string
        if (data['address_book_address1'] && !(typeof data['address_book_address1'] === 'string' || data['address_book_address1'] instanceof String)) {
            throw new Error("Expected the field `address_book_address1` to be a primitive type in the JSON string but got " + data['address_book_address1']);
        }
        // ensure the json data is a string
        if (data['address_book_address2'] && !(typeof data['address_book_address2'] === 'string' || data['address_book_address2'] instanceof String)) {
            throw new Error("Expected the field `address_book_address2` to be a primitive type in the JSON string but got " + data['address_book_address2']);
        }
        // ensure the json data is a string
        if (data['address_book_city'] && !(typeof data['address_book_city'] === 'string' || data['address_book_city'] instanceof String)) {
            throw new Error("Expected the field `address_book_city` to be a primitive type in the JSON string but got " + data['address_book_city']);
        }
        // ensure the json data is a string
        if (data['address_book_country'] && !(typeof data['address_book_country'] === 'string' || data['address_book_country'] instanceof String)) {
            throw new Error("Expected the field `address_book_country` to be a primitive type in the JSON string but got " + data['address_book_country']);
        }
        // ensure the json data is a string
        if (data['address_book_state'] && !(typeof data['address_book_state'] === 'string' || data['address_book_state'] instanceof String)) {
            throw new Error("Expected the field `address_book_state` to be a primitive type in the JSON string but got " + data['address_book_state']);
        }
        // ensure the json data is a string
        if (data['address_book_postcode'] && !(typeof data['address_book_postcode'] === 'string' || data['address_book_postcode'] instanceof String)) {
            throw new Error("Expected the field `address_book_postcode` to be a primitive type in the JSON string but got " + data['address_book_postcode']);
        }
        // ensure the json data is a string
        if (data['address_book_tax_id'] && !(typeof data['address_book_tax_id'] === 'string' || data['address_book_tax_id'] instanceof String)) {
            throw new Error("Expected the field `address_book_tax_id` to be a primitive type in the JSON string but got " + data['address_book_tax_id']);
        }
        // ensure the json data is a string
        if (data['address_book_identification_number'] && !(typeof data['address_book_identification_number'] === 'string' || data['address_book_identification_number'] instanceof String)) {
            throw new Error("Expected the field `address_book_identification_number` to be a primitive type in the JSON string but got " + data['address_book_identification_number']);
        }
        // ensure the json data is a string
        if (data['address_book_gender'] && !(typeof data['address_book_gender'] === 'string' || data['address_book_gender'] instanceof String)) {
            throw new Error("Expected the field `address_book_gender` to be a primitive type in the JSON string but got " + data['address_book_gender']);
        }
        // ensure the json data is a string
        if (data['address_book_alias'] && !(typeof data['address_book_alias'] === 'string' || data['address_book_alias'] instanceof String)) {
            throw new Error("Expected the field `address_book_alias` to be a primitive type in the JSON string but got " + data['address_book_alias']);
        }
        // ensure the json data is a string
        if (data['address_book_type'] && !(typeof data['address_book_type'] === 'string' || data['address_book_type'] instanceof String)) {
            throw new Error("Expected the field `address_book_type` to be a primitive type in the JSON string but got " + data['address_book_type']);
        }

        return true;
    }


}



/**
 * The ID of the address.
 * @member {String} address_book_id
 */
CustomerUpdateAddressInner.prototype['address_book_id'] = undefined;

/**
 * Specifies customer's first name in the address book
 * @member {String} address_book_first_name
 */
CustomerUpdateAddressInner.prototype['address_book_first_name'] = undefined;

/**
 * Specifies customer's last name in the address book
 * @member {String} address_book_last_name
 */
CustomerUpdateAddressInner.prototype['address_book_last_name'] = undefined;

/**
 * Specifies customer's company name in the address book
 * @member {String} address_book_company
 */
CustomerUpdateAddressInner.prototype['address_book_company'] = undefined;

/**
 * Specifies customer's fax in the address book
 * @member {String} address_book_fax
 */
CustomerUpdateAddressInner.prototype['address_book_fax'] = undefined;

/**
 * Specifies customer's phone number in the address book
 * @member {String} address_book_phone
 */
CustomerUpdateAddressInner.prototype['address_book_phone'] = undefined;

/**
 * Specifies customer's mobile phone number in the address book
 * @member {String} address_book_phone_mobile
 */
CustomerUpdateAddressInner.prototype['address_book_phone_mobile'] = undefined;

/**
 * Specifies customer's first address in the address book
 * @member {String} address_book_address1
 */
CustomerUpdateAddressInner.prototype['address_book_address1'] = undefined;

/**
 * Specifies customer's second address in the address book
 * @member {String} address_book_address2
 */
CustomerUpdateAddressInner.prototype['address_book_address2'] = undefined;

/**
 * Specifies customer's city in the address book
 * @member {String} address_book_city
 */
CustomerUpdateAddressInner.prototype['address_book_city'] = undefined;

/**
 * ISO code or name of country
 * @member {String} address_book_country
 */
CustomerUpdateAddressInner.prototype['address_book_country'] = undefined;

/**
 * ISO code or name of state.
 * @member {String} address_book_state
 */
CustomerUpdateAddressInner.prototype['address_book_state'] = undefined;

/**
 * Specifies customer's postcode
 * @member {String} address_book_postcode
 */
CustomerUpdateAddressInner.prototype['address_book_postcode'] = undefined;

/**
 * Add Tax Id
 * @member {String} address_book_tax_id
 */
CustomerUpdateAddressInner.prototype['address_book_tax_id'] = undefined;

/**
 * The national ID card number of this person, or a unique tax identification number.
 * @member {String} address_book_identification_number
 */
CustomerUpdateAddressInner.prototype['address_book_identification_number'] = undefined;

/**
 * Specifies customer's gender
 * @member {String} address_book_gender
 */
CustomerUpdateAddressInner.prototype['address_book_gender'] = undefined;

/**
 * Specifies customer's alias in the address book
 * @member {String} address_book_alias
 */
CustomerUpdateAddressInner.prototype['address_book_alias'] = undefined;

/**
 * Specifies customer's address type
 * @member {String} address_book_type
 */
CustomerUpdateAddressInner.prototype['address_book_type'] = undefined;

/**
 * Defines whether the address is used by default
 * @member {Boolean} address_book_default
 */
CustomerUpdateAddressInner.prototype['address_book_default'] = undefined;






export default CustomerUpdateAddressInner;

