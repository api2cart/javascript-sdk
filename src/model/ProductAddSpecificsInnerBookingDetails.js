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
import ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner from './ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner';
import ProductAddSpecificsInnerBookingDetailsOverridesInner from './ProductAddSpecificsInnerBookingDetailsOverridesInner';

/**
 * The ProductAddSpecificsInnerBookingDetails model module.
 * @module model/ProductAddSpecificsInnerBookingDetails
 * @version 1.1
 */
class ProductAddSpecificsInnerBookingDetails {
    /**
     * Constructs a new <code>ProductAddSpecificsInnerBookingDetails</code>.
     * @alias module:model/ProductAddSpecificsInnerBookingDetails
     * @param location {String} 
     * @param type {module:model/ProductAddSpecificsInnerBookingDetails.TypeEnum} 
     * @param sessionsCount {Number} 
     * @param timeStrictValue {Number} 
     * @param timeStrictType {module:model/ProductAddSpecificsInnerBookingDetails.TimeStrictTypeEnum} 
     * @param availabilities {Array.<module:model/ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner>} 
     */
    constructor(location, type, sessionsCount, timeStrictValue, timeStrictType, availabilities) { 
        
        ProductAddSpecificsInnerBookingDetails.initialize(this, location, type, sessionsCount, timeStrictValue, timeStrictType, availabilities);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, location, type, sessionsCount, timeStrictValue, timeStrictType, availabilities) { 
        obj['location'] = location;
        obj['type'] = type;
        obj['sessions_count'] = sessionsCount;
        obj['time_strict_value'] = timeStrictValue;
        obj['time_strict_type'] = timeStrictType || 'days';
        obj['availabilities'] = availabilities;
    }

    /**
     * Constructs a <code>ProductAddSpecificsInnerBookingDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductAddSpecificsInnerBookingDetails} obj Optional instance to populate.
     * @return {module:model/ProductAddSpecificsInnerBookingDetails} The populated <code>ProductAddSpecificsInnerBookingDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAddSpecificsInnerBookingDetails();

            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('session_duration')) {
                obj['session_duration'] = ApiClient.convertToType(data['session_duration'], 'Number');
            }
            if (data.hasOwnProperty('session_gap')) {
                obj['session_gap'] = ApiClient.convertToType(data['session_gap'], 'Number');
            }
            if (data.hasOwnProperty('sessions_count')) {
                obj['sessions_count'] = ApiClient.convertToType(data['sessions_count'], 'Number');
            }
            if (data.hasOwnProperty('time_strict_value')) {
                obj['time_strict_value'] = ApiClient.convertToType(data['time_strict_value'], 'Number');
            }
            if (data.hasOwnProperty('time_strict_type')) {
                obj['time_strict_type'] = ApiClient.convertToType(data['time_strict_type'], 'String');
            }
            if (data.hasOwnProperty('availabilities')) {
                obj['availabilities'] = ApiClient.convertToType(data['availabilities'], [ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner]);
            }
            if (data.hasOwnProperty('overrides')) {
                obj['overrides'] = ApiClient.convertToType(data['overrides'], [ProductAddSpecificsInnerBookingDetailsOverridesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductAddSpecificsInnerBookingDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductAddSpecificsInnerBookingDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductAddSpecificsInnerBookingDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['time_strict_type'] && !(typeof data['time_strict_type'] === 'string' || data['time_strict_type'] instanceof String)) {
            throw new Error("Expected the field `time_strict_type` to be a primitive type in the JSON string but got " + data['time_strict_type']);
        }
        if (data['availabilities']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['availabilities'])) {
                throw new Error("Expected the field `availabilities` to be an array in the JSON data but got " + data['availabilities']);
            }
            // validate the optional field `availabilities` (array)
            for (const item of data['availabilities']) {
                ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner.validateJSON(item);
            };
        }
        if (data['overrides']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['overrides'])) {
                throw new Error("Expected the field `overrides` to be an array in the JSON data but got " + data['overrides']);
            }
            // validate the optional field `overrides` (array)
            for (const item of data['overrides']) {
                ProductAddSpecificsInnerBookingDetailsOverridesInner.validateJSON(item);
            };
        }

        return true;
    }


}

ProductAddSpecificsInnerBookingDetails.RequiredProperties = ["location", "type", "sessions_count", "time_strict_value", "time_strict_type", "availabilities"];

/**
 * @member {String} location
 */
ProductAddSpecificsInnerBookingDetails.prototype['location'] = undefined;

/**
 * @member {module:model/ProductAddSpecificsInnerBookingDetails.TypeEnum} type
 */
ProductAddSpecificsInnerBookingDetails.prototype['type'] = undefined;

/**
 * @member {Number} session_duration
 */
ProductAddSpecificsInnerBookingDetails.prototype['session_duration'] = undefined;

/**
 * @member {Number} session_gap
 */
ProductAddSpecificsInnerBookingDetails.prototype['session_gap'] = undefined;

/**
 * @member {Number} sessions_count
 */
ProductAddSpecificsInnerBookingDetails.prototype['sessions_count'] = undefined;

/**
 * @member {Number} time_strict_value
 */
ProductAddSpecificsInnerBookingDetails.prototype['time_strict_value'] = undefined;

/**
 * @member {module:model/ProductAddSpecificsInnerBookingDetails.TimeStrictTypeEnum} time_strict_type
 * @default 'days'
 */
ProductAddSpecificsInnerBookingDetails.prototype['time_strict_type'] = 'days';

/**
 * @member {Array.<module:model/ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner>} availabilities
 */
ProductAddSpecificsInnerBookingDetails.prototype['availabilities'] = undefined;

/**
 * @member {Array.<module:model/ProductAddSpecificsInnerBookingDetailsOverridesInner>} overrides
 */
ProductAddSpecificsInnerBookingDetails.prototype['overrides'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ProductAddSpecificsInnerBookingDetails['TypeEnum'] = {

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "date_time"
     * @const
     */
    "date_time": "date_time"
};


/**
 * Allowed values for the <code>time_strict_type</code> property.
 * @enum {String}
 * @readonly
 */
ProductAddSpecificsInnerBookingDetails['TimeStrictTypeEnum'] = {

    /**
     * value: "days"
     * @const
     */
    "days": "days",

    /**
     * value: "hours"
     * @const
     */
    "hours": "hours",

    /**
     * value: "minutes"
     * @const
     */
    "minutes": "minutes"
};



export default ProductAddSpecificsInnerBookingDetails;

