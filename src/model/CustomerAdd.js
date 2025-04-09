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
import CustomerAddAddressInner from './CustomerAddAddressInner';
import CustomerAddConsentsInner from './CustomerAddConsentsInner';

/**
 * The CustomerAdd model module.
 * @module model/CustomerAdd
 * @version 1.1
 */
class CustomerAdd {
    /**
     * Constructs a new <code>CustomerAdd</code>.
     * @alias module:model/CustomerAdd
     * @param email {String} Defines customer's email
     * @param firstName {String} Defines customer's first name
     * @param lastName {String} Defines customer's last name
     */
    constructor(email, firstName, lastName) { 
        
        CustomerAdd.initialize(this, email, firstName, lastName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, firstName, lastName) { 
        obj['email'] = email;
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['status'] = 'enabled';
        obj['news_letter_subscription'] = false;
    }

    /**
     * Constructs a <code>CustomerAdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerAdd} obj Optional instance to populate.
     * @return {module:model/CustomerAdd} The populated <code>CustomerAdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAdd();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('group_ids')) {
                obj['group_ids'] = ApiClient.convertToType(data['group_ids'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('modified_time')) {
                obj['modified_time'] = ApiClient.convertToType(data['modified_time'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('last_login')) {
                obj['last_login'] = ApiClient.convertToType(data['last_login'], 'String');
            }
            if (data.hasOwnProperty('birth_day')) {
                obj['birth_day'] = ApiClient.convertToType(data['birth_day'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('news_letter_subscription')) {
                obj['news_letter_subscription'] = ApiClient.convertToType(data['news_letter_subscription'], 'Boolean');
            }
            if (data.hasOwnProperty('consents')) {
                obj['consents'] = ApiClient.convertToType(data['consents'], [CustomerAddConsentsInner]);
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], [CustomerAddAddressInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerAdd</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerAdd</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomerAdd.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['group'] && !(typeof data['group'] === 'string' || data['group'] instanceof String)) {
            throw new Error("Expected the field `group` to be a primitive type in the JSON string but got " + data['group']);
        }
        // ensure the json data is a string
        if (data['group_ids'] && !(typeof data['group_ids'] === 'string' || data['group_ids'] instanceof String)) {
            throw new Error("Expected the field `group_ids` to be a primitive type in the JSON string but got " + data['group_ids']);
        }
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        // ensure the json data is a string
        if (data['modified_time'] && !(typeof data['modified_time'] === 'string' || data['modified_time'] instanceof String)) {
            throw new Error("Expected the field `modified_time` to be a primitive type in the JSON string but got " + data['modified_time']);
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['last_login'] && !(typeof data['last_login'] === 'string' || data['last_login'] instanceof String)) {
            throw new Error("Expected the field `last_login` to be a primitive type in the JSON string but got " + data['last_login']);
        }
        // ensure the json data is a string
        if (data['birth_day'] && !(typeof data['birth_day'] === 'string' || data['birth_day'] instanceof String)) {
            throw new Error("Expected the field `birth_day` to be a primitive type in the JSON string but got " + data['birth_day']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        if (data['consents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['consents'])) {
                throw new Error("Expected the field `consents` to be an array in the JSON data but got " + data['consents']);
            }
            // validate the optional field `consents` (array)
            for (const item of data['consents']) {
                CustomerAddConsentsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['gender'] && !(typeof data['gender'] === 'string' || data['gender'] instanceof String)) {
            throw new Error("Expected the field `gender` to be a primitive type in the JSON string but got " + data['gender']);
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['fax'] && !(typeof data['fax'] === 'string' || data['fax'] instanceof String)) {
            throw new Error("Expected the field `fax` to be a primitive type in the JSON string but got " + data['fax']);
        }
        // ensure the json data is a string
        if (data['company'] && !(typeof data['company'] === 'string' || data['company'] instanceof String)) {
            throw new Error("Expected the field `company` to be a primitive type in the JSON string but got " + data['company']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        if (data['address']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['address'])) {
                throw new Error("Expected the field `address` to be an array in the JSON data but got " + data['address']);
            }
            // validate the optional field `address` (array)
            for (const item of data['address']) {
                CustomerAddAddressInner.validateJSON(item);
            };
        }

        return true;
    }


}

CustomerAdd.RequiredProperties = ["email", "first_name", "last_name"];

/**
 * Defines customer's email
 * @member {String} email
 */
CustomerAdd.prototype['email'] = undefined;

/**
 * Defines customer's first name
 * @member {String} first_name
 */
CustomerAdd.prototype['first_name'] = undefined;

/**
 * Defines customer's last name
 * @member {String} last_name
 */
CustomerAdd.prototype['last_name'] = undefined;

/**
 * Defines customer's unique password
 * @member {String} password
 */
CustomerAdd.prototype['password'] = undefined;

/**
 * Defines the group where the customer
 * @member {String} group
 */
CustomerAdd.prototype['group'] = undefined;

/**
 * Groups that will be assigned to a customer
 * @member {String} group_ids
 */
CustomerAdd.prototype['group_ids'] = undefined;

/**
 * Entity's date creation
 * @member {String} created_time
 */
CustomerAdd.prototype['created_time'] = undefined;

/**
 * Entity's date modification
 * @member {String} modified_time
 */
CustomerAdd.prototype['modified_time'] = undefined;

/**
 * Specifies customer's login name
 * @member {String} login
 */
CustomerAdd.prototype['login'] = undefined;

/**
 * Defines customer's last login time
 * @member {String} last_login
 */
CustomerAdd.prototype['last_login'] = undefined;

/**
 * Defines customer's birthday
 * @member {String} birth_day
 */
CustomerAdd.prototype['birth_day'] = undefined;

/**
 * Defines customer's status
 * @member {String} status
 * @default 'enabled'
 */
CustomerAdd.prototype['status'] = 'enabled';

/**
 * Defines whether the newsletter subscription is available for the user
 * @member {Boolean} news_letter_subscription
 * @default false
 */
CustomerAdd.prototype['news_letter_subscription'] = false;

/**
 * Defines consents to notifications
 * @member {Array.<module:model/CustomerAddConsentsInner>} consents
 */
CustomerAdd.prototype['consents'] = undefined;

/**
 * Defines customer's gender
 * @member {String} gender
 */
CustomerAdd.prototype['gender'] = undefined;

/**
 * Link to customer website
 * @member {String} website
 */
CustomerAdd.prototype['website'] = undefined;

/**
 * Store Id
 * @member {String} store_id
 */
CustomerAdd.prototype['store_id'] = undefined;

/**
 * Defines customer's fax
 * @member {String} fax
 */
CustomerAdd.prototype['fax'] = undefined;

/**
 * Defines customer's company
 * @member {String} company
 */
CustomerAdd.prototype['company'] = undefined;

/**
 * Defines customer's phone number
 * @member {String} phone
 */
CustomerAdd.prototype['phone'] = undefined;

/**
 * The customer note.
 * @member {String} note
 */
CustomerAdd.prototype['note'] = undefined;

/**
 * Specifies ISO code or name of country
 * @member {String} country
 */
CustomerAdd.prototype['country'] = undefined;

/**
 * @member {Array.<module:model/CustomerAddAddressInner>} address
 */
CustomerAdd.prototype['address'] = undefined;






export default CustomerAdd;

