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
import A2CDateTime from './A2CDateTime';
import Image from './Image';

/**
 * The Category model module.
 * @module model/Category
 * @version 1.1
 */
class Category {
    /**
     * Constructs a new <code>Category</code>.
     * @alias module:model/Category
     */
    constructor() { 
        
        Category.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Category} obj Optional instance to populate.
     * @return {module:model/Category} The populated <code>Category</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Category();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = A2CDateTime.constructFromObject(data['created_at']);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = A2CDateTime.constructFromObject(data['modified_at']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('stores_ids')) {
                obj['stores_ids'] = ApiClient.convertToType(data['stores_ids'], ['String']);
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
            }
            if (data.hasOwnProperty('meta_description')) {
                obj['meta_description'] = ApiClient.convertToType(data['meta_description'], 'String');
            }
            if (data.hasOwnProperty('meta_title')) {
                obj['meta_title'] = ApiClient.convertToType(data['meta_title'], 'String');
            }
            if (data.hasOwnProperty('avail')) {
                obj['avail'] = ApiClient.convertToType(data['avail'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('seo_url')) {
                obj['seo_url'] = ApiClient.convertToType(data['seo_url'], 'String');
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [Image]);
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
     * Validates the JSON data with respect to <code>Category</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Category</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['parent_id'] && !(typeof data['parent_id'] === 'string' || data['parent_id'] instanceof String)) {
            throw new Error("Expected the field `parent_id` to be a primitive type in the JSON string but got " + data['parent_id']);
        }
        // validate the optional field `created_at`
        if (data['created_at']) { // data not null
          A2CDateTime.validateJSON(data['created_at']);
        }
        // validate the optional field `modified_at`
        if (data['modified_at']) { // data not null
          A2CDateTime.validateJSON(data['modified_at']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['short_description'] && !(typeof data['short_description'] === 'string' || data['short_description'] instanceof String)) {
            throw new Error("Expected the field `short_description` to be a primitive type in the JSON string but got " + data['short_description']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['stores_ids'])) {
            throw new Error("Expected the field `stores_ids` to be an array in the JSON data but got " + data['stores_ids']);
        }
        // ensure the json data is a string
        if (data['keywords'] && !(typeof data['keywords'] === 'string' || data['keywords'] instanceof String)) {
            throw new Error("Expected the field `keywords` to be a primitive type in the JSON string but got " + data['keywords']);
        }
        // ensure the json data is a string
        if (data['meta_description'] && !(typeof data['meta_description'] === 'string' || data['meta_description'] instanceof String)) {
            throw new Error("Expected the field `meta_description` to be a primitive type in the JSON string but got " + data['meta_description']);
        }
        // ensure the json data is a string
        if (data['meta_title'] && !(typeof data['meta_title'] === 'string' || data['meta_title'] instanceof String)) {
            throw new Error("Expected the field `meta_title` to be a primitive type in the JSON string but got " + data['meta_title']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['seo_url'] && !(typeof data['seo_url'] === 'string' || data['seo_url'] instanceof String)) {
            throw new Error("Expected the field `seo_url` to be a primitive type in the JSON string but got " + data['seo_url']);
        }
        if (data['images']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['images'])) {
                throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
            }
            // validate the optional field `images` (array)
            for (const item of data['images']) {
                Image.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Category.prototype['id'] = undefined;

/**
 * @member {String} parent_id
 */
Category.prototype['parent_id'] = undefined;

/**
 * @member {module:model/A2CDateTime} created_at
 */
Category.prototype['created_at'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_at
 */
Category.prototype['modified_at'] = undefined;

/**
 * @member {String} name
 */
Category.prototype['name'] = undefined;

/**
 * @member {String} short_description
 */
Category.prototype['short_description'] = undefined;

/**
 * @member {String} description
 */
Category.prototype['description'] = undefined;

/**
 * @member {Array.<String>} stores_ids
 */
Category.prototype['stores_ids'] = undefined;

/**
 * @member {String} keywords
 */
Category.prototype['keywords'] = undefined;

/**
 * @member {String} meta_description
 */
Category.prototype['meta_description'] = undefined;

/**
 * @member {String} meta_title
 */
Category.prototype['meta_title'] = undefined;

/**
 * @member {Boolean} avail
 */
Category.prototype['avail'] = undefined;

/**
 * @member {String} path
 */
Category.prototype['path'] = undefined;

/**
 * @member {String} seo_url
 */
Category.prototype['seo_url'] = undefined;

/**
 * @member {Number} sort_order
 */
Category.prototype['sort_order'] = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Category.prototype['images'] = undefined;

/**
 * @member {Object} additional_fields
 */
Category.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
Category.prototype['custom_fields'] = undefined;






export default Category;

