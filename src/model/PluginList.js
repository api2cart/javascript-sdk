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
import Plugin from './Plugin';

/**
 * The PluginList model module.
 * @module model/PluginList
 * @version 1.1
 */
class PluginList {
    /**
     * Constructs a new <code>PluginList</code>.
     * @alias module:model/PluginList
     */
    constructor() { 
        
        PluginList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PluginList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginList} obj Optional instance to populate.
     * @return {module:model/PluginList} The populated <code>PluginList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PluginList();

            if (data.hasOwnProperty('all_plugins')) {
                obj['all_plugins'] = ApiClient.convertToType(data['all_plugins'], 'Number');
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = ApiClient.convertToType(data['plugins'], [Plugin]);
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = ApiClient.convertToType(data['additional_fields'], Object);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PluginList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PluginList</code>.
     */
    static validateJSON(data) {
        if (data['plugins']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['plugins'])) {
                throw new Error("Expected the field `plugins` to be an array in the JSON data but got " + data['plugins']);
            }
            // validate the optional field `plugins` (array)
            for (const item of data['plugins']) {
                Plugin.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} all_plugins
 */
PluginList.prototype['all_plugins'] = undefined;

/**
 * @member {Array.<module:model/Plugin>} plugins
 */
PluginList.prototype['plugins'] = undefined;

/**
 * @member {Object} additional_fields
 */
PluginList.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
PluginList.prototype['custom_fields'] = undefined;






export default PluginList;

